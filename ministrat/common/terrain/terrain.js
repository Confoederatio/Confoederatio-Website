ministrat.config.terrain = {
  forest: {
    name: "Forest",
    colour: [0, 255, 33],

    modifiers: {
      armour: {
        defence: -0.35
      },
      artillery: {
        attack: -0.20,
        defence: -0.50
      },
      infantry: {
        attack: 0.15,
        defence: 0.50
      }
    }
  },
  hills: {
    name: "Hills",
    colour: [127, 51, 0],

    modifiers: {
      armour: {
        attack: -0.25,
        defence: -0.50
      },
      artillery: {
        attack: -0.25,
        defence: 0.80
      },
      infantry: {
        attack: 0.35,
        defence: 0.75
      }
    }
  },
  mountains: {
    name: "Mountains",
    colour: [150, 150, 150],

    modifiers: {
      armour: {
        attack: -0.50,
        defence: -0.75
      },
      artillery: {
        attack: -0.50,
        defence: 0.75
      },
      infantry: {
        attack: 0.50,
        defence: 1.50
      }
    }
  },
  plains: {
    name: "Plains",
    colour: [255, 255, 255],

    modifiers: {
      armour: {
        attack: -0.50,
        defence: -0.75
      },
      artillery: {
        attack: -0.50,
        defence: 0.75
      },
      infantry: {
        attack: 0.50,
        defence: 1.50
      }
    }
  }
};