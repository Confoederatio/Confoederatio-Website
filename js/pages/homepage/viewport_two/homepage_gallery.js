//Initialise functions
{
  function addBookmarkItem (arg0_element_id, arg1_no_animation) {
    //Convert from parameters
    var local_element = document.getElementById(arg0_element_id);
    var local_id = arg0_element_id;
    var no_animation = arg1_no_animation;

    //Declare local instance variables
    var bookmark_btn = document.getElementById(`bookmark-btn-${local_id}`);

    //Change ID temporarily
    local_element.setAttribute("id", `preview-${local_id}`);
    bookmark_btn.setAttribute("class",
      bookmark_btn.getAttribute("class").replace("bookmark-empty", "bookmark-filled")
    );

    //Add local element to DOM as preview
    parallax_bookmarks.innerHTML += local_element.outerHTML;
    if (!parallax_bookmarked_items.includes(local_id)) parallax_bookmarked_items.push(local_id);

    //Change ID back
    local_element.setAttribute("id", local_id);

    //Modify new DOM element
    var all_bookmarks = document.querySelectorAll(".parallax-item-preview");
    var bookmark_el = document.getElementById(`preview-${local_id}`);

    bookmark_el.setAttribute("class",
      bookmark_el.getAttribute("class").replace("parallax-item", "parallax-item-preview") + " show-animation"
    );
    bookmark_el.setAttribute("onclick",
      `selectBookmarkItem('preview-${local_id}');`
    );
    for (var i = 0; i < all_bookmarks.length; i++) all_bookmarks[i].setAttribute("style", `
      left: calc(50% - 12vh - ${i*12}vh);
      z-index: ${all_bookmarks.length-1-i};
    `);

    bookmark_el.innerHTML += `
      <div id = "btn-close-bookmark-${local_id}" class = "parallax-icon close-btn" onclick = "bookmarkInteraction('${local_id}');"></div>"
    `;
    bookmark_el.setAttribute("style", `
      left: calc(50% - 12vh - ${all_bookmarks.length*12}vh);
      z-index: -1;
    `);

    //Closed anonymous function to preserve element object
    setTimeout(function(){
      bookmark_el.setAttribute("style", `
        left: calc(50% - 12vh - ${all_bookmarks.length*12}vh);
        z-index: -1;
      `);

      //This sorcery is needed to time out the classes
      var new_bookmark_el = document.getElementById(bookmark_el.id);
      new_bookmark_el.setAttribute("class",
        new_bookmark_el.getAttribute("class").replace(" show-animation", "")
      );
    }, 1000);

    //Add bookmark buttons and other shenanigans
    var new_bookmarks = document.querySelectorAll(".parallax-item-preview");
    for (var i = 0; i < new_bookmarks.length; i++) {
      var bookmark_dot_el = document.getElementById(`btn-bookmark-${new_bookmarks[i].id}`);

      //Add button for bookmark if it doesn't exist
      if (!bookmark_dot_el) {
        var local_class_name = (!no_animation) ? "parallax-bookmark-dot fade-in" : "parallax-bookmark-dot";
        parallax_buttons.innerHTML += `
          <div id = "btn-bookmark-${new_bookmarks[i].id}" class = "${local_class_name}" onclick = "selectBookmarkItem('${new_bookmarks[i].id}')"></div>
        `;

        var new_bookmark_el = document.getElementById(`btn-bookmark-${new_bookmarks[i].id}`);

        //Remove fade-in class after animation finishes playing
        setTimeout(function(){
          var all_animated_bookmarks = document.querySelectorAll(".parallax-bookmark-dot.fade-in");

          for (var i = 0; i < all_animated_bookmarks.length; i++) all_animated_bookmarks[i].setAttribute("class",
            all_animated_bookmarks[i].getAttribute("class").replace(" fade-in", "")
          );
        }, 1000);
      }
    }

    //Select bookmark if no other bookmark elements are present
    if (parallax_bookmarked_items.length == 1) {
      selected_bookmark = local_id;
    }
    selected_bookmark = (selected_bookmark == "") ? local_id : selected_bookmark;
    selected_bookmark = (!selected_bookmark.includes("preview-")) ? "preview-" + selected_bookmark : selected_bookmark;

    try {
      selectBookmarkItem(selected_bookmark, true, true);
    } catch {}

    //Hide no bookmark label since a new bookmark has been added
    if (!no_bookmark_label.getAttribute("class").includes(" hidden")) no_bookmark_label.setAttribute("class",
      no_bookmark_label.getAttribute("class") + " hidden"
    );

    bookmark_container.setAttribute("class",
      bookmark_container.getAttribute("class").replace(" no-bookmarks", "")
    );
  }

  function bookmarkInteraction (arg0_element_id) {
    //Convert from parameters
    var local_id = arg0_element_id;

    (!parallax_bookmarked_items.includes(local_id) && !document.querySelector(`#preview-${local_id}`)) ? addBookmarkItem(local_id) : removeBookmarkItem(local_id);
  }

  function clearBookmarkDots () {
    //Fetch all dots, iterate over them, and clear them.
    var all_bookmark_dots = document.querySelectorAll(".parallax-bookmark-dot");

    for (var i = 0; i < all_bookmark_dots.length; i++) all_bookmark_dots[i].setAttribute("class",
      all_bookmark_dots[i].getAttribute("class").replace(" filled", "")
    );
  }

  function closeContentPanel (arg0_element_id) {
    //Convert from parameters
    var local_el = document.getElementById(`${arg0_element_id}-content-panel`);

    //Replace 'shown' class with nothing
    local_el.setAttribute("class",
      local_el.getAttribute("class").replace(" shown", "")
    );
    parallax_scroll_indicator.style.opacity = 1;
  }

  function getDescendants (arg0_element_id) {
    //Convert from parameters
    var local_element = arg0_element_id;

    //Declare local instance variables
    var current_iterations = 0;
    var descendants = [local_element];

    try {
      while (true) {
        for (var i = 0; i < descendants.length; i++) {
          var local_obj = parallax_settings[descendants[i]];
          if (local_obj.dependencies) for (var x = 0; x < local_obj.dependencies.length; x++) descendants.push(local_obj.dependencies[x]);

          //Make sure only unique descendants remain
          descendants = unique(descendants);
        }

        //Break before hitting an infinite loop
        if (current_iterations >= 15) break;
        current_iterations++;
      }
    } catch {}

    //Remove original element
    descendants = removeElement(descendants, local_element);

    //Return statement
    return descendants;
  }

  function getMaximisedContentPanel () {
    //Declare local instance variables
    var maximised_content_panel = document.querySelector(".parallax-item-content-panel.shown.maximised");

    //Return statement
    return (maximised_content_panel) ? maximised_content_panel.id.replace("-content-panel", "") : undefined;
  }

  function getParent (arg0_element_id) {
    //Convert from parameters
    var potential_child_element = arg0_element_id;

    //Declare local instance variables
    var all_parallax_elements = Object.keys(parallax_settings);
    var parent_elements = [];

    for (var i = 0; i < all_parallax_elements.length; i++) {
      var item_obj = parallax_settings[all_parallax_elements[i]];
      if (item_obj.dependencies) if (item_obj.dependencies.includes(potential_child_element)) parent_elements.push(all_parallax_elements[i]);
    }

    parent_elements = unique(parent_elements);

    //Return statement
    return parent_elements;
  }

  function hideAllContentPanels () {
    //Declare local instance variables
    var all_shown_content_panels = document.querySelectorAll(".parallax-item-content-panel.shown");

    //Iterate over them and remove 'shown' class
    for (var i = 0; i < all_shown_content_panels.length; i++) all_shown_content_panels[i].setAttribute("class",
      all_shown_content_panels[i].getAttribute("class").replace(" shown", "")
    );
  }

  function hideBookmarkUI () {
    bookmark_minimise_btn.setAttribute("class",
      bookmark_minimise_btn.getAttribute("class") + " minimised"
    );
    bookmark_container.setAttribute("class",
      bookmark_container.getAttribute("class") + " minimised"
    );
  }

  function initParallaxElement (arg0_element_id) {
    //Convert from parameters
    var local_element = arg0_element_id;

    if (!parallax_settings[local_element]) parallax_settings[local_element] = {};
    var local_obj = parallax_settings[local_element];

    //Begin initialising local fields
    local_obj.animation_queue = (!local_obj.animation_queue) ? [] : local_obj.animation_queue;
    local_obj.id = (!local_obj.id) ? local_element : local_obj.id;

    //Hide and show functions
    local_obj.hide_function = function () {
      local_obj.animation_queue.push(local_obj.animation);
      local_obj.animation_queue = local_obj.animation_queue.reverse();
      local_obj.animation_queue = unique(local_obj.animation_queue);
      local_obj.animation_queue = local_obj.animation_queue.reverse();
    }

    local_obj.show_function = function () {
      local_obj.animation_queue.push(`${local_obj.animation}-shown`);
      local_obj.animation_queue = local_obj.animation_queue.reverse();
      local_obj.animation_queue = unique(local_obj.animation_queue);
      local_obj.animation_queue = local_obj.animation_queue.reverse();
    }

    //Processes animation queue
    var dependency_amount = getDescendants(local_obj.id).length;

    local_obj.logic = setInterval(function(){
      //Check to make sure all descendants have finished their animation queues
      var all_children_finished_playing = true;
      var all_descendants = getDescendants(local_obj.id);

      for (var i = 0; i < all_descendants.length; i++) {
        var descendant_obj = parallax_settings[all_descendants[i]];
        if (descendant_obj.animation_queue.length > 0) all_children_finished_playing = false;
      }

      //If all descendants have finished, begin processing animation_queue
      if (all_children_finished_playing) {
        if (local_obj.animation_queue.length > 0) {
          //Set animation attribute
          try {
            var local_element = document.getElementById(local_obj.id);
            local_element.setAttribute("animation", local_obj.animation_queue[0]);

            setTimeout(function(local_obj){
              if (local_obj.animation_queue[0].includes("-shown")) {
                local_element.setAttribute("class",
                  local_element.getAttribute("class").replace(" hidden", "")
                );
              } else {
                local_element.setAttribute("class",
                  local_element.getAttribute("class") + " hidden"
                );
              }

              //Pop first element in array and carry on
              local_obj.animation_queue.splice(0, 1);
            }(local_obj), 750);
          } catch {}
        }
      }
    }, 750-dependency_amount);

    //Initialise DOM elements
    var local_el = document.getElementById(local_obj.id);

    local_el.setAttribute("animation", local_el.id + "-shown");
    local_el.setAttribute("onclick", `toggleContentPanel('${local_el.id}'); selectParallaxItem('${local_el.id}');`);

    if (local_obj.animation && !local_obj.is_base_node)
      local_el.innerHTML = local_el.innerHTML += `
        <div class = "parallax-icon pin ${(parallax_pinned_items.includes(local_el.id)) ? "pin-filled" : "pin-empty"}" onclick = "pinItem('${local_el.id}');"></div>
        <div id = "bookmark-btn-${local_el.id}" class = "parallax-icon bookmark bookmark-empty" onclick = "bookmarkInteraction('${local_el.id}');"></div>
      `;
  }

  function isImmediateDescendant (arg0_element_id, arg1_element_id) {
    //Convert from parameters
    var parent_element = arg0_element_id;
    var child_element = arg1_element_id;

    //Declare local instance variables
    var is_descendant = false;
    var item_obj = parallax_settings[parent_element];

    if (item_obj) if (item_obj.dependencies) is_descendant = (item_obj.dependencies.includes(child_element)) ? true : is_descendant;

    //Return statement
    return is_descendant;
  }

  function isDescendant (arg0_element_id, arg1_element_id) {
    //Convert from parameters
    var parent_element = arg0_element_id;
    var child_element = arg1_element_id;

    //Declare local instance variables
    var all_parallax_elements = Object.keys(parallax_settings);
    var current_ids = [child_element];
    var current_iterations = 0;
    var is_descendant = false;

    while (true) {
      //Recursive iteration to find parent
      for (var i = 0; i < current_ids.length; i++) {
        var all_child_parents = getParent(current_ids[i]);
        is_descendant = (all_child_parents.includes(parent_element)) ? true : is_descendant;

        for (var x = 0; x < all_child_parents.length; x++) {
          var all_parents = getParent(all_child_parents[x]);

          if (all_parents.includes(parent_element)) {
            is_descendant = true;
          } else {
            for (var y = 0; y < all_parents.length; y++) current_ids.push(all_parents[y]);
          }
        }
      }

      //Clear duplicates and restart loop, abort if needed
      current_ids = unique(current_ids);
      current_iterations++;
      if (current_iterations > 15) break;
    }

    return is_descendant;
  }

  function maximiseContentPanel (arg0_element_id) {
    //Declare local instance variables
    var local_element = document.getElementById(`${arg0_element_id}-content-panel`);
    var local_id = arg0_element_id;
    var maximise_btn = document.getElementById(`${arg0_element_id}-maximise-btn`);

    //Reset container styling
    try {
      update_content_panel_container_paused = true;
      content_panel_container.setAttribute("style", `
        transform-style: preserve-3d;
        backface-visibility: hidden;
        position: relative;
        display: block;
        left: 0vh;
        top: 0px;
        transition: all 2s ease !important;
      `);
      content_panel_subcontainer.setAttribute("style",
        `
          transition: all 2s ease !important;
        `
      );

      //Apply maximised class
      local_element.setAttribute("class",
        local_element.getAttribute("class") + " maximised"
      );
      maximise_btn.setAttribute("onclick", `minimiseContentPanel('${local_id}');`);
      parallax_scroll_indicator.style.opacity = 0;
    } catch (e) {
      console.error(e);
    }
  }

  function minimiseContentPanel (arg0_element_id, arg1_instant) {
    //Declare local instance variables
    var local_element = document.getElementById(`${arg0_element_id}-content-panel`);
    var local_id = arg0_element_id;
    var is_instant = arg1_instant;
    var minimise_btn = document.getElementById(`${arg0_element_id}-maximise-btn`);

    //Reset container styling to default
    update_content_panel_container_paused = false;

    //Hide maximised class
    local_element.setAttribute("class",
      local_element.getAttribute("class").replace(" maximised", "") + ((!is_instant) ? " being-minimised" : " instant-minimisation")
    );
    //Remove being-minimised class to stop animation
    setTimeout(function(){
      local_element.setAttribute("class",
        local_element.getAttribute("class").replace(" being-minimised", "").replace(" instant-minimisation", "")
      );
    }, (!is_instant) ? 1000 : 500);

    minimise_btn.setAttribute("onclick", `maximiseContentPanel('${local_id}');`);
    parallax_scroll_indicator.style.opacity = 1;
  }

  function onParallaxHover (e) {
    //Declare local instance variables
    var all_parallax_dom_elements = document.querySelectorAll(".parallax-item");
    var all_parallax_elements = Object.keys(parallax_settings);

    //Fetch ID recursively
    var current_element = e.target;
    var current_iterations = 0;

    while (true) {
      if (current_element)
        if (current_element.id) {
          break;
        } else {
          current_element = current_element.parentElement;
        }

      if (current_iterations > 15) break;
      current_iterations++;
    }

    //Increment hover argument to determine how long the element has been hovered over
    try {
      var invalid_id = false;
      for (var i = 0; i < exempt_id_patterns.length; i++) invalid_id =  (current_element.id.includes(exempt_id_patterns[i])) ? true : invalid_id;
      if (!invalid_id) {
        //Set hover time attribute
        var hover_time = (current_element.getAttribute("hover-time")) ? parseInt(current_element.getAttribute("hover-time")) : 0;
        hover_time = hover_time/100;
        hover_time++;
        current_element.setAttribute("hover-time", hover_time*100);

        //Remove hover-time attribute for all elements that are not currently being hovered over
        var all_hover_elements = document.querySelectorAll("[hover-time]");
        for (var i = 0; i < all_hover_elements.length; i++) if (all_hover_elements[i].id != current_element.id) all_hover_elements[i].removeAttribute("hover-time");
      }
    } catch {}

    //Hide all elements if the current target is not a parallax-item and has been hovered over for at least 5 seconds
    try {
      if (!current_element.getAttribute("class")) {
        if (parseInt(current_element.getAttribute("hover-time")) >= 5000) {
          parallax_selected = [];
          updateHiddenElements();
        }
      } else {
        if (parseInt(current_element.getAttribute("hover-time")) >= 500) {
          var item_obj = parallax_settings[current_element.id];
          if (item_obj) parallax_selected.push(current_element.id);
          parallax_selected = unique(parallax_selected);

          //Deselect any child elements that are not the immediate child of the hovered element, or its parent
          var deselection_array = [];
          for (var i = 0; i < all_parallax_dom_elements.length; i++) {
            var is_parent = false;
            var local_id = all_parallax_dom_elements[i].id;

            is_parent = isDescendant(local_id, current_element.id);

            if (!is_parent && local_id != current_element.id) {
              deselection_array.push(local_id);
            }
          }

          //Deselect everything in deselection_array
          for (var i = 0; i < deselection_array.length; i++) removeElement(parallax_selected, deselection_array[i]);

          //Update hidden elements
          updateHiddenElements();
        }
      }
    } catch {}
  }

  function pinItem (arg0_element_id) {
    //Convert from parameters
    var local_element = document.getElementById(arg0_element_id);
    var local_id = arg0_element_id;

    //Set item as pinned if possible
    try {
      var pin_btn = local_element.querySelector(".pin");

      (parallax_pinned_items.includes(local_id)) ? removeElement(parallax_pinned_items, local_id) : parallax_pinned_items.push(local_id);
      pin_btn.setAttribute("class",
        (parallax_pinned_items.includes(local_id)) ? pin_btn.getAttribute("class").replace("pin-empty", "pin-filled") : pin_btn.getAttribute("class").replace("pin-filled", "pin-empty")
      );
    } catch {}
  }

  function removeBookmarkItem (arg0_element_id) {
    //Convert from parameters
    var local_element = document.getElementById(arg0_element_id);
    var local_id = arg0_element_id;

    //Declare local instance variables
    var bookmark_btn = document.getElementById(`bookmark-btn-${local_id}`);
    var is_last_element = (parallax_bookmarked_items[parallax_bookmarked_items.length-1] == local_id);
    var local_index = parallax_bookmarked_items.indexOf(local_id.replace("preview-", ""));

    //Remove bookmark functionally
    bookmark_btn.setAttribute("class",
      bookmark_btn.getAttribute("class").replace("bookmark-filled", "bookmark-empty")
    );
    removeElement(parallax_bookmarked_items, local_id);
    closing_bookmark = true;
    setTimeout(function(){
      closing_bookmark = false;
    }, 0);

    //Remove bookmark preview
    var bookmark_dot_el = document.getElementById(`btn-bookmark-preview-${local_id}`);
    var preview_el = document.getElementById(`preview-${local_id}`);

    (!is_last_element) ? preview_el.setAttribute("item-state", "hidden") : preview_el.setAttribute("item-state", "hidden-last");
    bookmark_dot_el.setAttribute("class",
      bookmark_dot_el.getAttribute("class") + " fade-out"
    );

    //Select a new bookmark since the current selected bookmark is no longer valid
    var new_selected_bookmark = selected_bookmark;

    if (!parallax_bookmarked_items.includes(selected_bookmark.replace("preview-", ""))) {
      new_selected_bookmark = (!parallax_bookmarked_items[local_index]) ? parallax_bookmarked_items[local_index-1] : parallax_bookmarked_items[local_index];
    }

    //Error trapping
    try {
      new_selected_bookmark = (!new_selected_bookmark.includes("preview-")) ? "preview-" + new_selected_bookmark : new_selected_bookmark;

      selectBookmarkItem(new_selected_bookmark, true, true);
    } catch {}

    setTimeout(function(){
      preview_el.remove();
      bookmark_dot_el.remove();

      //Show no bookmark label if applicable
      if (parallax_bookmarked_items.length == 0) {
        no_bookmark_label.setAttribute("class",
          no_bookmark_label.getAttribute("class").replace(" hidden", "")
        );
        if (!bookmark_container.getAttribute("class").includes("no-bookmarks")) bookmark_container.setAttribute("class",
          bookmark_container.getAttribute("class") + " no-bookmarks"
        );
      }
    }, 500);

    //Update DOM, but only if its not being handled by selectBookmarkItem
    if (!new_selected_bookmark) {
      var all_bookmarks = document.querySelectorAll(`.parallax-item-preview:not([id="preview-${local_id}"])`);
      for (var i = 0; i < all_bookmarks.length; i++) {
        var new_left = `calc(50% - ${i*12}vh)`;

        if (all_bookmarks[i].style.left != new_left) all_bookmarks[i].setAttribute("style", `
          left: ${new_left};
          z-index: ${all_bookmarks.length-1-i};
        `);
      }
    }
  }

  function selectBookmarkItem (arg0_element_id, arg1_automatic_selection, arg2_no_scroll) {
    //Convert from parameters
    var actual_id = arg0_element_id.replace("preview-", "");
    var automatic_selection = arg1_automatic_selection;
    var local_bookmark = document.getElementById(`${arg0_element_id}`);
    var local_el = document.getElementById(`btn-bookmark-${arg0_element_id}`);
    var local_id = arg0_element_id;
    var no_scroll = arg2_no_scroll;
    var old_bookmark = document.getElementById(`${selected_bookmark}`);
    var parallax_element = document.getElementById(`${arg0_element_id.replace("preview-", "")}`);

    //Declare local instance variables
    var local_index = (parallax_bookmarked_items.includes(local_id.replace("preview-", ""))) ? parallax_bookmarked_items.indexOf(local_id.replace("preview-", "")) : 0;

    //Make sure that other buttons aren't being pressed
    if (!closing_bookmark || automatic_selection) {
      //Clear all dots and set local_el to filled
      clearBookmarkDots();
      local_el.setAttribute("class",
        local_el.getAttribute("class") + " filled"
      );

      //Select bookmark and apply DOM classes/styling
      selected_bookmark = local_id;

      //Translate bookmarks_container over so that the selected element is centred
      bookmarks_container.style.left = `${local_index*-12}vh`;

      //Reset old_bookmark styling to default
      var all_bookmarks = document.querySelectorAll(`.parallax-item-preview:not([item-state*="hidden"])`);
      for (var i = 0; i < all_bookmarks.length; i++) {
        all_bookmarks[i].setAttribute("style", `
          left: calc(50% - 12vh - ${i*12}vh);
          z-index: ${
            (i < local_index) ? i : all_bookmarks.length - i
          };
        `);
        all_bookmarks[i].setAttribute("class",
          all_bookmarks[i].getAttribute("class").replace(" selected", "")
        );
      }

      //Add styling to current bookmark
      local_bookmark.style.zIndex = 99;
      if (!local_bookmark.getAttribute("class").includes("selected")) local_bookmark.setAttribute("class",
        local_bookmark.getAttribute("class") + " selected"
      );

      //Pan to bookmark
      if (!no_scroll) {
        //Hide any content panels that are both maximised and shown
        if (getMaximisedContentPanel()) minimiseContentPanel(getMaximisedContentPanel());

        var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)/100;
        var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)/100;

        var local_width = parseInt(getComputedStyle(parallax_element).width.replace("px", ""))/vh;
        var offset_x = (vw*50)/vh;
        var pan_x = parseInt(getComputedStyle(parallax_element).left.replace("px", ""))/vh;

        parallax_scroll_x = (pan_x*-1 + offset_x - local_width/2);
        if (!parallax_container.getAttribute("class").includes("slow-scroll")) parallax_container.setAttribute("class",
          parallax_container.getAttribute("class").replace(" fast-scroll", "") + " slow-scroll"
        );
        parallax_container.style.transform = `translateX(${parallax_scroll_x}vh)`;
        content_wrapper_container.style.left = `${parallax_scroll_x*0.15}vh`;
      }

      if (!parallax_element.getAttribute("animation").includes("shown")) {
        parallax_element.setAttribute("animation", actual_id + "-shown");
        parallax_element.setAttribute("class",
          parallax_element.getAttribute("class").replace(" hidden", "")
        );
      }
    }
  }

  function selectParallaxItem (arg0_element_id) {
    //Convert from parameters
    var element_id = arg0_element_id;

    //Either add ID to parallax_selected or not
    (!parallax_selected.includes(element_id)) ? parallax_selected.push(element_id) : removeElement(parallax_selected, element_id);
  }

  function showBookmarkUI () {
    bookmark_minimise_btn.setAttribute("class",
      bookmark_minimise_btn.getAttribute("class").replace(" minimised", "")
    );
    bookmark_container.setAttribute("class",
      bookmark_container.getAttribute("class").replace(" minimised", "")
    );
  }

  function toggleContentPanel (arg0_element_id) {
    //Convert from parameters
    var local_el = document.getElementById(`${arg0_element_id}-content-panel`);
    var local_id = arg0_element_id;

    try {
      //Declare local instance variables
      var all_hover_elements = document.querySelectorAll(":hover");
      var is_valid = true;
      var pre_check = local_el.getAttribute("class").includes("shown");

      //Check to see that no hover elements have an onclick parameter that does not include toggleContentPanel()
      for (var i = 0; i < all_hover_elements.length; i++) try {
        is_valid = (!all_hover_elements[i].getAttribute("onclick").includes("toggleContentPanel")) ? false : is_valid;
      } catch {}

      if (is_valid) {
        //Apply shown class if not shown, hide if shown
        hideAllContentPanels();
        if (local_el) if (!pre_check) {
          local_el.setAttribute("class",
            local_el.getAttribute("class") + " shown"
          );
        } else {
          hideAllContentPanels();
        }
      }

      //Reset perspective to default first if needed
      if (document.querySelector(".parallax-item-content-panel.maximised") && getMaximisedContentPanel() != local_id)
        update_content_panel_container_paused = false;
      if (getMaximisedContentPanel())
        if (getMaximisedContentPanel() != local_id || !update_content_panel_container_paused)
          minimiseContentPanel(getMaximisedContentPanel(), true);
    } catch (e) {}
  }

  function togglePreview (arg0_element_id) {
    //Convert from parameters
    var element_id = arg0_element_id;
    var img_el = document.getElementById(arg0_element_id.replace(/_/gm, "-"));
    var local_el = document.getElementById(arg0_element_id + "-preview-btn");

    if (local_el.getAttribute("class").includes(" active")) {
      local_el.setAttribute("class",
        local_el.getAttribute("class").replace(" active", "")
      );
      img_el.setAttribute("class",
        img_el.getAttribute("class") + " cursor-shown"
      );
      window[element_id + "_active_preview"] = false;
    } else {
      local_el.setAttribute("class",
        local_el.getAttribute("class") + " active"
      );
      img_el.setAttribute("class",
        img_el.getAttribute("class").replace(" cursor-shown", "")
      );
      window[element_id + "_active_preview"] = true;
    }
  }

  function updateContentPanelContainer () {
    //Declare local instance variables
    var main_parallax_scene = document.querySelector(".layer.main");

    //Regular error trapping
    try {
      if (!update_content_panel_container_paused) {
        content_panel_container.setAttribute("style",
          main_parallax_scene.getAttribute("style")
        );
        content_panel_subcontainer.setAttribute(
          "style",
          `transform: perspective(40em) rotateX(${parseInt(perspective_deg_y.replace("deg", ""))*0.5}deg) translateX(${parallax_scroll_x}vh);`
        );
        content_wrapper_container.style.left = `0vh`;
      }
    } catch {}
  }

  function updateHiddenElements () {
    //Declare local instance variables
    var all_parallax_dom_elements = document.querySelectorAll(".parallax-item");
    var all_parallax_elements = Object.keys(parallax_settings);
    var hidden_elements = [];
    var visible_elements = [];

    //Fetch visible elements
    for (var i = 0; i < parallax_selected.length; i++) {
      try {
        for (var x = 0; x < parallax_settings[parallax_selected[i]].dependencies.length; x++) visible_elements.push(parallax_settings[parallax_selected[i]].dependencies[x]);
      } catch {}
      visible_elements.push(parallax_selected[i]);
    }
    for (var i = 0; i < all_parallax_elements.length; i++) {
      if (getParent(all_parallax_elements[i]).length == 0)
        visible_elements.push(all_parallax_elements[i]);
      try {
        if (document.getElementById(`${all_parallax_elements[i]}-content-panel`).getAttribute("class").includes("shown"))
          visible_elements.push(all_parallax_elements[i]);
      } catch {}
    }

    visible_elements = unique(visible_elements);

    //Iterate through all parallax DOM elements and hide those not in visible_elements
    for (var i = 0; i < all_parallax_dom_elements.length; i++)
      try {
        if (!visible_elements.includes(all_parallax_dom_elements[i].id)) {
          if (all_parallax_dom_elements[i].getAttribute("animation")) if (all_parallax_dom_elements[i].getAttribute("animation").includes("-shown")) {
            //Declare local instance variables
            var local_obj = parallax_settings[all_parallax_dom_elements[i].id];
            if (!parallax_pinned_items.includes(local_obj.id)) hidden_elements.push([local_obj.id, getDescendants(local_obj.id).length]);
          }
        }
      } catch (e) {}

    //Sort hidden_elements in ascending order
    hidden_elements.sort((a, b) => a[1]-b[1]);

    //Invoke hide_function for all hidden_elements
    for (var i = 0; i < hidden_elements.length; i++)
      parallax_settings[hidden_elements[i][0]].hide_function();
  }
}
