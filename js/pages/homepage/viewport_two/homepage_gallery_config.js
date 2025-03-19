//Technical Elements
/*
  createPanel() - options: {
    name: (String) - Optional. The name to print on the square tile. "" by default.
    animation: (String) - The CSS class to apply to the square tile.
      font_position: (String) - Optional. "bottom-left"/"bottom-right"/"centre"/"top-left". "bottom-right" by default
      font_size: (Number) - The font size to apply (1-3). 1 by default. Valid font sizes are:
        1 - .parallax-minor-project-text. 2vh
        2 - .parallax-major-project-text. 4vh
        3 - .parallax-group-text. 6vh
      font_weight: (Number) - The font weight to apply to the title. 300 by default.

    size: (Number) - The size of the tile (1-6). Valid square sizes are:
      1 - .large-square. 32vh
      2 - .sublarge-square. 24vh
      3 - .medium-square. 24vh
      4 - .submedium-square. 18vh
      5 - .small-square. 16vh
      6 - .tiny-square. 12vh
    x: (Number) - The x position (vh) to place the tile. 0 by default.
    y: (Number) - The y position (vh) to place the tile. 0 by default.

    default_bookmark: (Boolean) - Whether the panel is bookmarked by default.
    default_pin: (Boolean) - Whether the panel is pinned by default.
    dependencies: (Array<String, ...>) - Optional. The IDs of the tiles that descend from this category tile. Nothing by default.

    background_image: (String) - Optional. The file path to display as the background image for the tile. Undefined by default.
    background_opacity: (Number) - Optional. 0.3 by default if background_image is defined.
    colour: (String) - The CSS colour to portray the tile in. Colour classes are:
      "blue"/"blurple"/"bright-yellow"/"copper"/"cream_white"/"dark-blurple"/"dark-grey"/"forest-green"/"light-blue"/"light-grey"/"light-purple"/"midnight-blue"/"orange"/"mauve"/"red"/"sepia"/"salmon"/"transparent-sepia"/"yellow". "copper" by default.
    content: (String) - The HTML text to add to the content panel associated with the tile.
  }
*/

//Technical Projects
{
  window.initGallery = function () {
    var all_tiles_keys = Object.keys(config.homepage.gallery.tiles);

    //Iterate over all_tiles_keys
    for (var i = 0; i < all_tiles_keys.length; i++) {
      var local_tile = config.homepage.gallery.tiles[all_tiles_keys[i]];

      createPanel(all_tiles_keys[i], local_tile);
    }
  };

  initGallery();
}
