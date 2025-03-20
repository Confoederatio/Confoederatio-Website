//Declare DOM/instance variables
var scene = document.getElementById("scene");

var bookmark_container = document.getElementById("project-parallax-bookmark-container");
var bookmark_label = document.getElementById("project-parallax-bookmark-labels-container");
var bookmark_minimise_btn = document.getElementById("project-parallax-bookmark-minimise-icon");
var bookmark_scroll_x = 0;
var bookmarks_container = document.getElementById("project-parallax-preview-container");
var can_scroll_further = false;
var content_wrapper_container = document.getElementById("main-parallax-content-panel-wrapper");
var closing_bookmark = false;
var content_panel_container = document.getElementById("main-parallax-content-panel-wrapper");
var content_panel_subcontainer = document.getElementById("main-parallax-content-panel-scroll-wrapper");
var exempt_id_patterns = [
  "body-text",
  "btn",
  "content-panel",
  "development-date",
  "divider",
  "indicator",
  "preview",
  "project-parallax-bookmark-label",
  "project-parallax-bookmark-minimise-icon",
  "project-parallax-bookmark-text-icon",
  "status",
  "text-wrapper",
  "title"
];
var no_bookmark_label = document.getElementById("project-parallax-no-bookmark-label");
var old_bookmark_index = 1;
var panel_id_patterns = [
  "body-text",
  "content-panel",
  "development-date",
  "divider",
  "indicator",
  "preview",
  "project-parallax-bookmark-label",
  "project-parallax-bookmark-minimise-icon",
  "project-parallax-bookmark-text-icon",
  "status",
  "text-wrapper",
  "title",
];
var parallax = new Parallax(scene);
var parallax_body = document.getElementById("project-parallax-container");
var parallax_bookmarks = document.getElementById("project-parallax-preview-container");
var parallax_bookmarked_items = [
  "triumph_and_tragedy_two",
  "anno_1800",
  "les_halles"
];
var parallax_buttons = document.getElementById("project-parallax-dots-container");
var parallax_container = document.getElementById("project-parallax-scroll-container");
var parallax_current_scroll_x = 0;
var parallax_pinned_items = [
  "anno_1800",
  "triumph_and_tragedy_two",
  "les_halles",
  "brooklyn_bridge"
];
var parallax_scroll_indicator = document.getElementById("project-parallax-scroll-fill-indicator");
window.parallax_scroll_x = 0;
var parallax_selected = [];
var parallax_settings = {
  //Technical
  anno_1800: {
    animation: "anno-1800"
  },
  universal_bot_framework: {
    animation: "universal-bot-framework"
  },
  triumph_and_tragedy_mod_creator: {
    animation: "triumph-and-tragedy-mod-creator"
  },
  triumph_and_tragedy_two: {
    animation: "triumph-and-tragedy-two",
    dependencies: ["system_dynamics", "into_modernity", "last_man_standing", "proxy_cables"]
  },
  system_dynamics: {
    animation: "system-dynamics"
  },
  into_modernity: {
    animation: "into-modernity"
  },
  proxy_cables: {
    animation: "proxy-cables"
  },
  last_man_standing: {
    animation: "last-man-standing"
  },
  grand_strategy: {
    dependencies: ["eleven_fiftynine", "empires_undone"]
  },
  empires_undone: {
    animation: "empires-undone",
    dependencies: ["hoi4_map_renderer"]
  },
  eleven_fiftynine: {
    animation: "eleven-fiftynine"
  },
  hoi4_map_renderer: {
    animation: "hoi4-map-renderer"
  },
  other_technical_projects: {
    dependencies: ["js_in_4", "project_trinity"]
  },
  project_trinity: {
    animation: "project-trinity"
  },
  js_in_4: {
    animation: "js-in-4"
  },

  //Artistic
  finished_works: {
    dependencies: ["armoured_advance", "brooklyn_bridge"]
  },
  armoured_advance: {
    animation: "armoured-advance"
  },
  brooklyn_bridge: {
    animation: "brooklyn-bridge",
    dependencies: ["the_colorado", "resolute", "les_halles"]
  },
  the_colorado: {
    animation: "the-colorado"
  },
  resolute: {
    animation: "resolute",
    dependencies: ["boats_on_a_pond"]
  },
  les_halles: {
    animation: "les-halles",
    dependencies: ["boats_on_a_pond"]
  },
  boats_on_a_pond: {
    animation: "boats-on-a-pond"
  },
  other_sketches: {
    dependencies: ["clouds_and_sunset", "sinking_of_a_battleship"]
  },
  clouds_and_sunset: {
    animation: "clouds-and-sunset",
    dependencies: ["journal_sketches"]
  },
  sinking_of_a_battleship: {
    animation: "sinking-of-a-battleship",
    dependencies: ["journal_sketches"]
  },
  journal_sketches: {
    animation: "journal-sketches",
    dependencies: ["sketch_one", "past", "sketch_two", "broken_mirror"]
  },
  sketch_one: {
    animation: "sketch-one"
  },
  past: {
    animation: "past"
  },
  sketch_two: {
    animation: "sketch-two"
  },
  broken_mirror: {
    animation: "broken-mirror"
  },

  //Cartographic
  historical_atlas_of_the_modern_world: {
    dependencies: ["the_adriatic"]
  },
  the_adriatic: {
    animation: "the-adriatic"
  }
};
var selected_bookmark = "";
var update_content_panel_container_paused = false;
var vh = document.documentElement.clientHeight/100;
var vw = document.documentElement.clientWidth/100;

//Restrict parallax fluidity
parallax.scalar(12.5, 35);

//Bookmark UI
{
  bookmark_minimise_btn.onclick = function () {
    (!bookmark_minimise_btn.getAttribute("class").includes("minimised")) ? hideBookmarkUI() : showBookmarkUI();
  }
}

//Content Panel UI
{
  setTimeout(function(){
    var all_content_titles = document.querySelectorAll(".parallax-item-content-panel-title");
    for (var i = 0; i < all_content_titles.length; i++) all_content_titles[i].innerHTML += `
      <img id = "${all_content_titles[i].id.replace("-panel-title", "")}-close-btn" class = "content-panel-close-btn" src = "gfx/interface/icons/close_btn.png" draggable = "false" onclick = "closeContentPanel('${all_content_titles[i].id.replace("-panel-title", "")}');">
      <img id = "${all_content_titles[i].id.replace("-panel-title", "")}-maximise-btn" class = "content-panel-maximise-btn" src = "gfx/interface/icons/maximise_icon.png" draggable = "false" onclick = "maximiseContentPanel('${all_content_titles[i].id.replace("-panel-title", "")}');">
      ${(document.getElementById(all_content_titles[i].id.replace("-panel-title", "") + "-preview") ) ? `<img id = "${all_content_titles[i].id.replace("-panel-title", "")}-preview-btn" class = "content-panel-preview-btn active" src = "gfx/interface/icons/preview_icon.png" draggable = "false" onclick = "togglePreview('${all_content_titles[i].id.replace("-panel-title", "")}');">` : ""}
    `;
  }, 500);
}

//Parallax event listeners for scrolling/panning around
{
  //Set event listener to on move
  parallax_body.addEventListener("mousemove", (e) => {
  	//Define instance variables
  	var half_width = parallax_body.clientWidth/2,
  			half_height = parallax_body.clientHeight/2,
  			mouse_x = half_width + parallax_body.offsetLeft - e.pageX,
  			mouse_y = half_height + parallax_body.offsetTop - e.pageY;

    //Restrict mouse movement by 32x if a content panel is maximised
    if (update_content_panel_container_paused) {
      mouse_x = mouse_x/32;
      mouse_y = mouse_y/32;
    }

  	var maximum_x_degrees = 1;
  	var maximum_y_degrees = 1;

  	//Calculate current degrees
  	window.perspective_deg_x = ((mouse_y/half_height)*maximum_x_degrees*-1)+(maximum_x_degrees/2) + "deg";
  	window.perspective_deg_y = ((mouse_x/half_width)*maximum_y_degrees*-1)+2 + "deg";

  	//Apply 3D CSS to local element
    window.perspective_string = `rotateX(${perspective_deg_x}) rotateY(${perspective_deg_y})`;
  	scene.setAttribute(
  		"style",
  		`transform: perspective(20em) ${perspective_string};`
  	);
  });

  //Translate vertical scroll to horizontal scroll
  parallax_body.addEventListener("wheel", (e) => {
    //Declare local instance variables
    var scroll_enabled = true;

    //Prevent default scroll behaviour from occurring so far as the scroll bounds have not been reached (conditional)
    parallax_current_scroll_x = e.deltaY/vw/1.5;

    //Leftwards scroll bound
    scroll_enabled = (parallax_current_scroll_x < 0 && parallax_scroll_x > 0) ? false : scroll_enabled;

    //Rightwards scroll bound
    scroll_enabled = (parallax_current_scroll_x > 0 && parallax_scroll_x*-1 > 440) ? false : scroll_enabled;

    //Make sure main banner is entirely off screen
    scroll_enabled = isElementAtTop(parallax_body) ? scroll_enabled : false;

    //Scrolling is disabled if any content panels are maximised and shown
    if (document.querySelectorAll(".maximised.shown").length != 0 || document.querySelectorAll(".art-preview-image:hover").length != 0) {
      scroll_enabled = false;
      e.preventDefault();
    }

    //Enable scrolling for content panels, disable if scrolled to top or bottom and user is trying to scroll in that direction
    var is_over_panel_container = false;
    for (var i = 0; i < panel_id_patterns.length; i++) is_over_panel_container = (e.target.id.includes(panel_id_patterns[i])) ? true : scroll_enabled;

    if (is_over_panel_container && !update_content_panel_container_paused) {
      var hovered_element;
      var all_hover_elements = document.querySelectorAll(":hover");

      for (var i = 0; i < all_hover_elements.length; i++) try {
        hovered_element =  (all_hover_elements[i].getAttribute("class").includes("content-wrapper")) ? all_hover_elements[i] : hovered_element;
      } catch {}

      if (hovered_element) {
        var container_height = hovered_element.querySelector(".text-wrapper").offsetHeight - hovered_element.offsetHeight;
        var current_scroll = Math.ceil(hovered_element.scrollTop);

        //Check if user is scrolling up
        //console.log(`Scroll enabled:`, scroll_enabled)
        scroll_enabled = ((e.deltaY < 0 && current_scroll == 0) || (e.deltaY > 0 && current_scroll >= container_height - 1));
        //console.log(`Scroll enabled:`, scroll_enabled)

        //Reserved for debugging purposes
        //console.log(`${e.deltaY} > 0 && ${current_scroll} >= ${container_height-1}`);
      }
    }

    if (scroll_enabled && window.scrollY <= window.innerHeight*2) {
      //Make sure 100% of the screen is occupied
      document.getElementById("project-parallax-anchor").scrollIntoView({
        behavior: "instant"
      });

      //Flip it around to maintain intuitive direction
      parallax_current_scroll_x = parallax_current_scroll_x*-1;

      //Fetch current scroll and update translateX
      parallax_scroll_x += parallax_current_scroll_x;

      if (!parallax_container.getAttribute("class").includes("fast-scroll")) parallax_container.setAttribute("class",
        parallax_container.getAttribute("class").replace(" slow-scroll", "") + " fast-scroll"
      );
      parallax_container.style.transform = `translateX(${parallax_scroll_x}vh)`;

      e.preventDefault();
    }

    window.parallax_scroll_progress = Math.abs(parallax_scroll_x*(100/440));
    parallax_scroll_indicator.style.width = `${parallax_scroll_x*(100/440)*-1}vw`;
  });
}

//Hide all parallax elements that are dependencies by default
function initGallery () {
  //Declare local instance variables
  var hide_elements = [];
  var parallax_elements = document.querySelectorAll(".parallax-item");

  //Iterate over all gallery elements
  for (var i = 0; i < parallax_elements.length; i++) {
    var parallax_obj = parallax_settings[parallax_elements[i].id];

    //Other initialisation
    initParallaxElement(parallax_elements[i].id);

    //hide_elements can never contain elements that are pinned
    if (getParent(parallax_elements[i].id).length > 0 && !parallax_pinned_items.includes(parallax_elements[i].id))
      hide_elements.push(parallax_elements[i].id);
  }
  hide_elements = unique(hide_elements);

  //Iterate over all hidden elements
  for (var i = 0; i < hide_elements.length; i++) {
    var local_el = document.getElementById(hide_elements[i]);
    var local_obj = parallax_settings[local_el.id];

    local_el.setAttribute("class",
      local_el.getAttribute("class") + " hidden"
    );
    if (local_obj.animation)
      local_el.setAttribute("animation",
        `${local_obj.animation}`
      );
  }

  //Iterate over all bookmarked items; show bookmarks in preview area
  for (var i = 0; i < parallax_bookmarked_items.length; i++)
    addBookmarkItem(parallax_bookmarked_items[i], true);
}

//Parallax gallery logic
var parallax_gallery_logic = setInterval(function(){
  for (var i = 0; i < parallax_selected.length; i++) {
    if (parallax_settings[parallax_selected[i]]) {
      var item_obj = parallax_settings[parallax_selected[i]];

      //Show dependencies if not already shown
      if (item_obj.dependencies) {
        for (var x = 0; x < item_obj.dependencies.length; x++) {
          var child_element = document.getElementById(item_obj.dependencies[x]);
          var child_obj = parallax_settings[child_element.id];
          if (child_element.getAttribute("class").includes(" hidden")) {
            child_element.setAttribute("class", child_element.getAttribute("class").replace(" hidden", ""));
            if (parallax_settings[child_element.id].animation) {
              var local_obj = parallax_settings[child_element.id];
              //Invoke show_function
              local_obj.show_function();
            }
          }
        }
      }
    }
  }
}, 100);

//Update content panel container
var content_panel_container_logic = setInterval(function(){
  updateContentPanelContainer();
}, 0);
