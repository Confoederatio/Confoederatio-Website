ministrat.config.units = {
  air: {
    name: "Air",
    image: `./ministrat/gfx/unit_icons/aircraft`,

    attack: 500,
    defence: 350,
    movement: 2200,
    range: 100,

    modifiers: {
      can_only_attack: ["air"],
      can_only_be_attacked_by: ["air"],
      to_units_in_range: {
        attack_modifier: 1.50,
        defence_modifier: 1.50
      }
    }
  },
  armour: {
    name: "Armour",
    image: `./ministrat/gfx/unit_icons/armour`,

    attack: 250,
    defence: 500,
    movement: 55,
    range: 8,

    modifiers: {
      in_urban_range: {
        distance: 45,

        attack_modifier: 0.50,
        defence_modifier: 0.20,
        movement_modifier: 0.50
      },
      when_attacking: {
        attack_modifier: 1.35
      },
      when_defending: {
        attack_modifier: 0.50
      }
    }
  },
  artillery: {
    name: "Artillery",
    image: `./ministrat/gfx/unit_icons/artillery`,

    attack: 300,
    defence: 50,
    movement: 10,
    range: 30,

    modifiers: {
      when_attacking_armour: {
        attack_modifier: 1.35
      },
      when_defending_against_armour: {
        attack_modifier: 1.75
      }
    }
  },
  infantry: {
    name: "Infantry",
    image: `./ministrat/gfx/unit_icons/infantry`,
    can_capture_cities: true,

    modifiers: {
      in_urban_range: {
        distance: 10,

        attack_modifier: 0.50,
        defence_modifier: 0.50
      }
    }
  }
};