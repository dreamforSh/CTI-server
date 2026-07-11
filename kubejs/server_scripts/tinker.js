ServerEvents.recipes(event => {
  function addSevering(entityType, item, count) {
    event.custom(
      {
        "type": "tconstruct:severing",
        "entity": {
          "type": entityType
        },
        "result": {
          "count": count,
          "item": item
        }
      }
    )
  }
  function addMelting(item, fluid, amount, temp, time) {
    event.custom(
      {
        "type": "tconstruct:melting",
        "ingredient": {
          "item": item
        },
        "temperature": temp,
        "time": time,
        "result": {
          "fluid": fluid,
          "amount": amount
        }
      }
    )
  }
  function addCastingBlock(fluid, amount, time, result) {
    event.custom(
      {
        "type": "tconstruct:casting_basin",
        "cooling_time": time,
        "fluid": {
          "amount": amount,
          "fluid": fluid
        },
        "result": result
      }
    )
  }
  function addCastingTable(fluid_name,fluid_amount,cast,result,consumeCast,time) {
    let recipe = {
      "type": "tconstruct:casting_table",
      "cast": cast.startsWith('#') ? { "tag": cast.substring(1) } : { "item": cast },
      "cast_consumed": consumeCast,
      "fluid": {
        "name": fluid_name,
        "amount": fluid_amount
      },
      "result": result,
      "cooling_time": time
    };
    event.custom(recipe);
  }
  function addOverslime(item, amount) {
    event.custom(
      {
        "type": "tconstruct:overslime_modifier",
        "ingredient": {
          "item": item
        },
        "restore_amount": amount
      }
    )
  }
  function addAlloy(inputs, temperature, conditions, result, amount) {
    let recipe = {
      type: "tconstruct:alloy",
      inputs: inputs,
      result: {
        fluid: result,
        amount: amount
      },
      temperature: temperature
    }
    if (conditions) {
      recipe.conditions = conditions
    }
    event.custom(recipe)
  }

  addAlloy([
    { fluid: 'tconstruct:molten_diamond', amount: 300 },
    { fluid: "tconstruct:molten_emerald", amount: 300 },
    { fluid: 'tconstruct:molten_quartz', amount: 600 },
    { fluid: "thermal:redstone", amount: 900 }
  ], 16666, null, "kubejs:hot_heavycrystal_lava", 1000)
  addAlloy([
    { fluid: "etshtinker:molten_bismuth", amount: 270 },
    { fluid: 'tconstruct:molten_silver', amount: 360 },
    { fluid: "tconstruct:molten_osmium", amount: 450 },
    { fluid: 'tconstruct:molten_gold', amount: 540 },
    { fluid: "tconstruct:molten_lead", amount: 540 },
  ], 16666, null, "kubejs:hot_heavymetal_lava", 1000)
  addAlloy([
    { fluid: "tconstruct:molten_aluminum", amount: 270 },
    { fluid: "tconstruct:molten_zinc", amount: 360 },
    { fluid: "tconstruct:molten_nickel", amount: 450 },
    { fluid: 'tconstruct:molten_tin', amount: 540 },
    { fluid: "tconstruct:molten_copper", amount: 540 },
  ], 16666, null, "kubejs:hot_metal_lava", 1000)
  addAlloy([
    { fluid: "tconstruct:molten_silver", amount: 90 },
    { fluid: "tconstruct:molten_tin", amount: 270 },
    { fluid: "thermal:glowstone", amount: 200 },
  ], 1850, null, "tconstruct:molten_lumium", 360)
  addAlloy([
    { fluid: "tconstruct:molten_diamond", amount: 100 },
    { fluid: "tconstruct:molten_lead", amount: 270 },
    { tag: "forge:ender", amount: 500 },
  ], 1850, null, "tconstruct:molten_enderium", 360)



  addCastingBlock("thermal:redstone", 900, 200, 'minecraft:redstone_block')
  addCastingBlock("thermal:glowstone", 400, 200, 'minecraft:glowstone')

  addCastingTable("thermal:redstone", 100,"#tconstruct:casts/single_use/gem","minecraft:redstone", true, 80);
  addCastingTable("thermal:glowstone", 100,"#tconstruct:casts/single_use/gem","minecraft:glowstone_dust", true, 80);
  addCastingTable("thermal:redstone", 100,"#tconstruct:casts/multi_use/gem","minecraft:redstone", false, 80);
  addCastingTable("thermal:glowstone", 100,"#tconstruct:casts/multi_use/gem","minecraft:glowstone_dust", false, 80);

  addSevering("aether:valkyrie", "kubejs:broken_victory_medal", 2)

  addMelting('tinkers_reforged:titanium_ingot', "tinkers_reforged:titanium", 90, 2000, 100)
  addMelting('tinkers_reforged:titanium_dust', "tinkers_reforged:titanium", 90, 2000, 100)
  addMelting('tinkers_reforged:titanium_nugget', "tinkers_reforged:titanium", 10, 2000, 20)

  addMelting("aether:valkyrie_boots", "kubejs:molten_valkyrie", 3600, 3250, 100)
  addMelting("aether:valkyrie_helmet", "kubejs:molten_valkyrie", 4500, 3250, 125)
  addMelting("aether:valkyrie_chestplate", "kubejs:molten_valkyrie", 7200, 3250, 200)
  addMelting("aether:valkyrie_leggings", "kubejs:molten_valkyrie", 1800, 3250, 175)

  addMelting("aether:phoenix_boots", "kubejs:molten_phoenix", 360, 3475, 100)
  addMelting("aether:phoenix_helmet", "kubejs:molten_phoenix", 450, 3475, 125)
  addMelting("aether:phoenix_chestplate", "kubejs:molten_phoenix", 720, 3475, 200)
  addMelting("aether:phoenix_leggings", "kubejs:molten_phoenix", 630, 3475, 175)
  addMelting("aether:phoenix_gloves", "kubejs:molten_phoenix", 180, 3475, 100)

  addMelting('minecraft:redstone_block', "thermal:redstone", 900, 1500, 200)
  addMelting('minecraft:redstone', "thermal:redstone", 100, 1500, 200)
  addMelting('minecraft:glowstone', "thermal:glowstone", 400, 1500, 200)
  addMelting('minecraft:glowstone_dust', "thermal:glowstone", 100, 1500, 200)

  addMelting("aether:gravitite_sword", "kubejs:molten_gravitite", 180, 2500, 100)
  addMelting("aether:gravitite_boots", "kubejs:molten_gravitite", 360, 2500, 100)
  addMelting("aether:gravitite_helmet", "kubejs:molten_gravitite", 450, 2500, 100)
  addMelting("aether:gravitite_chestplate", "kubejs:molten_gravitite", 720, 2500, 100)
  addMelting("aether:gravitite_leggings", "kubejs:molten_gravitite", 630, 2500, 100)
  addMelting("aether:gravitite_gloves", "kubejs:molten_gravitite", 180, 2500, 100)

  addMelting("aether:valkyrie_hoe", "kubejs:molten_valkyrie", 1800, 3250, 100)
  addMelting("aether:valkyrie_axe", "kubejs:molten_valkyrie", 2700, 3250, 100)
  addMelting("aether:valkyrie_shovel", "kubejs:molten_valkyrie", 900, 3250, 100)
  addMelting("aether:valkyrie_pickaxe", "kubejs:molten_valkyrie", 2700, 3250, 100)
  addMelting("aether:valkyrie_gloves", "kubejs:molten_valkyrie", 1800, 3250, 100)

  addSevering("undergarden:forgotten_guardian", "undergarden:forgotten_ingot", 2)

  event.custom(
    {
      "type": "tconstruct:casting_table",
      "cast": { "tag": "forge:plates/steel" },
      "cast_consumed": true,
      "fluid": {
        "name": "tinkers_ingenuity:molten_shine_alloy",
        "amount": 180
      },
      "result": "kubejs:luminous_metal_plate",
      "cooling_time": 20
    }
  )

  event.custom(
    {
      "type": "tconstruct:casting_table",
      "fluid": {
        "name": "kubejs:molten_azure_swet",
        "amount": 250
      },
      "result": "aether:swet_ball",
      "cooling_time": 20
    }
  )
  event.custom(
    {
      "type": "tconstruct:casting_table",
      "fluid": {
        "name": "kubejs:molten_gold_swet",
        "amount": 250
      },
      "result": "aether_redux:golden_swet_ball",
      "cooling_time": 20
    }
  )
  event.custom(
    {
      "type": "tconstruct:casting_table",
      "fluid": {
        "name": "kubejs:molten_dark_swet",
        "amount": 250
      },
      "result": "aether_redux:dark_swet_ball",
      "cooling_time": 20
    }
  )
  addMelting("aether:swet_ball", "kubejs:molten_azure_swet", 250, 1750, 90)
  addMelting("aether_redux:golden_swet_ball", "kubejs:molten_gold_swet", 250, 1750, 90)
  addMelting("aether_redux:dark_swet_ball", "kubejs:molten_dark_swet", 250, 1750, 90)

  event.custom(
    {
      "type": "tconstruct:ore_melting",
      "byproducts": [
        {
          "amount": 270,
          "fluid": "etshtinker:molten_bismuth"
        }
      ],
      "ingredient": {
        "item": "etshtinker:bismuthinite"
      },
      "rate": "metal",
      "result": {
        "amount": 1500,
        "fluid": "tconstruct:seared_stone"
      },
      "temperature": 1500,
      "time": 60
    }
  )
  event.custom(
    {
      "type": "tconstruct:casting_table",
      "cast": { "item": "etshtinker:activated_chroma_plate" },
      "cast_consumed": false,
      "fluid": {
        "name": "immersiveengineering:phenolic_resin",
        "amount": 250
      },
      "result": "immersiveengineering:plate_duroplast",
      "cooling_time": 5
    }
  )

  event.custom({
    "type": "tconstruct:modifier",
    "allow_crystal": true,
    "inputs": [
      {
        "item": "aquamirae:oxygen_tank"
      },
      {
        "item": "aquamirae:elodea"
      },
      {
        "item": "l2complements:soul_flame"
      },
      {
        "item": "twilightforest:torchberries"
      },
      {
        "item": "aquamirae:esca"
      }
    ],
    "level": 1,
    "result": "cti:oxygelium_bud_helmet",
    "tools": {
      "tag": "tconstruct:modifiable/armor/helmets"
    }
  })

  event.custom({
    "type": "tconstruct:ore_melting",
    "ingredient": {
      "item": "aether_redux:veridium_ore"
    },
    "rate": "metal",
    "result": {
      "amount": 180,
      "fluid": "kubejs:molten_veridium"
    },
    "temperature": 2000,
    "time": 120
  })
  event.custom({
    "type": "tconstruct:ore_melting",
    "ingredient": {
      "item": "aether_redux:raw_veridium"
    },
    "rate": "metal",
    "result": {
      "amount": 90,
      "fluid": "kubejs:molten_veridium"
    },
    "temperature": 200,
    "time": 60
  })
  event.shaped(Item.of('cti:silicated_bricks'), [
    'AB',
    'BA'
  ], {
    A: 'kubejs:silicon_carbide',
    B: 'tconstruct:scorched_brick'
  })
  event.shaped(Item.of('cti:silicated_glass'), [
    ' A ',
    'BCB',
    ' A '
  ], {
    A: 'kubejs:silicon_carbide',
    B: 'tconstruct:scorched_brick',
    C: '#thermal:glass/hardened'
  })
  event.shaped(Item.of('cti:silicated_chute'), [
    'ABA',
    ' C ',
    'ABA'
  ], {
    A: 'thermal:steel_plate',
    B: '#forge:ingots/hop_graphite',
    C: 'cti:silicated_bricks',
  })
  event.shaped(Item.of('cti:silicated_drain'), [
    'A A',
    'BCB',
    'A A'
  ], {
    A: 'thermal:steel_plate',
    B: '#forge:ingots/hop_graphite',
    C: 'cti:silicated_bricks',
  })
  event.shaped(Item.of('cti:silicated_duct'), [
    'A A',
    'BCB',
    'A A'
  ], {
    A: 'thermal:gold_plate',
    B: '#forge:ingots/hop_graphite',
    C: 'cti:silicated_bricks',
  })
  event.shaped(Item.of('cti:silicated_valve'), [
    'A A',
    'BCB',
    'A A'
  ], {
    A: 'kubejs:zirconium_alloy',
    B: '#forge:ingots/hop_graphite',
    C: 'cti:silicated_bricks',
  })
  event.shaped(Item.of('cti:silicated_ingot_gauge'), [
    'ACA',
    'BAB',
    'ACA'
  ], {
    A: '#thermal:glass/hardened',
    B: 'tconstruct:scorched_brick',
    C: 'kubejs:silicon_carbide',
  })
  event.shaped(Item.of('cti:silicated_fuel_gauge'), [
    'BAC',
    'AAA',
    'CAB'
  ], {
    A: '#thermal:glass/hardened',
    B: 'tconstruct:scorched_brick',
    C: 'kubejs:silicon_carbide',
  })
  event.shaped(Item.of('3x cti:hepatizon_faucet'), [
    'A A',
    ' A '
  ], {
    A: 'tconstruct:hepatizon_ingot',
  })
  event.shaped(Item.of('cti:hepatizon_casting_basin'), [
    'A A',
    'A A',
    'AAA'
  ], {
    A: 'tconstruct:hepatizon_ingot',
  })
  event.shaped(Item.of('cti:hepatizon_casting_table'), [
    'AAA',
    'A A',
    'A A'
  ], {
    A: 'tconstruct:hepatizon_ingot',
  })
  event.shaped(Item.of('cti:advanced_alloyer'), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'tconstruct:hepatizon_ingot',
    B: 'tconstruct:scorched_alloyer'
  })
  event.shaped(Item.of('3x cti:zirconium_alloy_faucet'), [
    'A A',
    ' A '
  ], {
    A: 'kubejs:zirconium_alloy',
  })
  event.shaped(Item.of('cti:zirconium_alloy_casting_basin'), [
    'A A',
    'ABA',
    'AAA'
  ], {
    A: 'kubejs:zirconium_alloy',
    B: 'pneumaticcraft:logistics_core'
  })
  event.shaped(Item.of('cti:zirconium_alloy_casting_table'), [
    'AAA',
    'ABA',
    'A A'
  ], {
    A: 'kubejs:zirconium_alloy',
    B: 'pneumaticcraft:logistics_core'
  })

  event.custom({
    "type": "tconstruct:modifier",
    "allow_crystal": true,
    "inputs": [
      {
        "item": "l2complements:sculkium_ingot"
      },
      {
        "item": "l2complements:void_eye",
        "amount_needed": 3
      },
      {
        "item": "tconstruct:manyullyn_ingot",
        "amount_needed": 3
      },
      {
        "item": "etshtinker:lightless_alloy"
      }
    ],
    "level": 1,
    "result": "cti:shadow_slash",
    "slots": {
      "abilities": 1
    },
    "tools": {
      "tag": "tconstruct:modifiable/melee"
    }
  })
  event.custom({
    "type": "tconstruct:modifier_salvage",
    "modifier": "cti:shadow_slash",
    "slots": {
      "abilities": 1
    },
    "tools": {
      "tag": "tconstruct:modifiable/melee"
    }
  })

  event.custom({
    "type": "tconstruct:casting_basin",
    "cast": { "item": "cti:silicated_bricks" },
    "cast_consumed": true,
    "fluid": {
      "name": "tconstruct:molten_steel",
      "amount": 360
    },
    "result": "cti:refinery_controller",
    "cooling_time": 200
  })

  event.custom({
    "type": "tconstruct:modifier",
    "allow_crystal": true,
    "inputs": [
      {
        "item": "create:mechanical_pump"
      },
      {
        "item": "create:precision_mechanism",
      },
      {
        "item": "tconstruct:slimesteel_ingot",
        "amount_needed": 4
      }
    ],
    "level": 1,
    "result": "cti:overfill",
    "slots": {
      "abilities": 1
    },
    "tools": {
      "item": "cti:slime_can"
    }
  })
  event.custom({
    "type": "tconstruct:modifier_salvage",
    "modifier": "cti:overfill",
    "slots": {
      "abilities": 1
    },
    "tools": {
      "item": "cti:slime_can"
    }
  })

  event.custom({
    "type": "tconstruct:modifier",
    "allow_crystal": true,
    "inputs": [
      {
        "tag": "tconstruct:slimy_logs",
        "amount_needed": 4
      }
    ],
    "level": {
      "max": 2
    },
    "result": "cti:replaced_overgrowth",
    "slots": {
      "upgrades": 1
    },
    "tools": {
      "item": "cti:slime_can"
    }
  })
  event.custom({
    "type": "tconstruct:modifier_salvage",
    "modifier": "cti:replaced_overgrowth",
    "slots": {
      "upgrades": 1
    },
    "tools": {
      "item": "cti:slime_can"
    }
  })

  event.custom({
    "type": "tconstruct:modifier",
    "allow_crystal": true,
    "inputs": [
      {
        "item": "ae2:annihilation_plane"
      },
      {
        "item": "ae2:singularity",
      },
      {
        "item": "thermal:enderium_ingot",
        "amount_needed": 4
      }
    ],
    "level": 1,
    "result": "cti:distanced_overfill",
    "slots": {
      "abilities": 1
    },
    "tools": {
      "item": "cti:slime_can"
    }
  })
  event.custom({
    "type": "tconstruct:modifier_salvage",
    "modifier": "cti:distanced_overfill",
    "slots": {
      "abilities": 1
    },
    "tools": {
      "item": "cti:slime_can"
    }
  })

  addOverslime("tconstruct:ender_slime_ball", 80)
  addOverslime("tconstruct:ender_congealed_slime", 360)
  addOverslime("tconstruct:ender_slime", 972)

event.custom({
  "type": "tconstruct:modifier",
  "allow_crystal": true,
  "inputs": [
    {
      "item": "biomancy:creator_mix"
    },
    {
      "item":"tinkers_ingenuity:blood_binding_ingot",
      "amount_needed": 2
    },
    {
      "item": "tinkers_things:hematite",
      "amount_needed": 4
    }
  ],
  "level": 1,
  "result": "cti:break_through",
  "slots": {
    "abilities": 1
  },
  "tools": {
    "item": "solidarytinker:soulge"
  }
})
event.custom({
  "type": "tconstruct:modifier_salvage",
  "modifier": "cti:break_through",
  "slots": {
    "abilities": 1
  },
  "tools": {
    "item": "solidarytinker:soulge"
  }
})

event.custom({
  "type": "tconstruct:modifier",
  "allow_crystal": true,
  "inputs": [
    {
      "item": "solidarytinker:bloodmeat_ingot"
    },
    {
      "item":"enigmaticlegacy:berserk_charm",
    }
  ],
  "level": 1,
  "result": "cti:blood_letting",
  "slots": {
    "upgrades": 1
  },
  "tools": {
    "item": "solidarytinker:soulge"
  }
})
event.custom({
  "type": "tconstruct:modifier_salvage",
  "modifier": "cti:blood_letting",
  "slots": {
    "upgrades": 1
  },
  "tools": {
    "item": "solidarytinker:soulge"
  }
})

event.custom({
  "type": "tconstruct:modifier",
  "allow_crystal": true,
  "inputs": [
    {
      "item": "tinkerscalibration:oraclium_ingot",
      "amount_needed": 4
    },
    {
      "item":"enigmaticlegacy:cursed_stone",
    }
  ],
  "level": 1,
  "result": "cti:blasphemy",
  "slots": {
    "upgrades": 1
  },
  "tools": {
    "item": "solidarytinker:soulge"
  }
})
event.custom({
  "type": "tconstruct:modifier_salvage",
  "modifier": "cti:blasphemy",
  "slots": {
    "upgrades": 1
  },
  "tools": {
    "item": "solidarytinker:soulge"
  }
})

event.custom({
  "type": "tconstruct:modifier",
  "allow_crystal": true,
  "inputs": [
    {
      "item": "immersiveengineering:connector_hv_relay",
      "amount_needed": 16
    },
    {
      "item":"etshtinker:sculk_energycore",
    },
    {
      "item":"immersivepetroleum:napalm_bucket",
    }
    
  ],
  "level": 1,
  "result": "etshtinker:plasma_blade",
  "slots": {
    "abilities": 1
  },
  "tools": {
    "item": "etshtinker:constrained_plasma_saber"
  }
})
event.custom({
  "type": "tconstruct:modifier_salvage",
  "modifier": "etshtinker:plasma_blade",
  "slots": {
    "abilities": 1
  },
  "tools": {
    "item": "etshtinker:constrained_plasma_saber"
  }
})

event.custom({
  "type": "tconstruct:modifier",
  "allow_crystal": true,
  "inputs": [
    {
      "item": "tinkers_thinking:echo_bronze_ingot",
      "amount_needed": 4
    },
    {
      "item":"etshtinker:sculk_energycore",
    },
    {
      "item":"immersiveengineering:tesla_coil",
    }
  ],
  "level": 1,
  "result": "etshtinker:echo_slash",
  "slots": {
    "upgrades": 1
  },
  "tools": {
    "item": "etshtinker:constrained_plasma_saber"
  }
})
event.custom({
  "type": "tconstruct:modifier",
  "allow_crystal": false,
  "inputs": [
    {
      "item": "aether:lightning_knife",
    },
    {
      "item":"botania:thunder_sword",
    },
    {
      "item":"aether:valkyrie_lance",
    },
    {
      "item":"aether_redux:sentry_chip",
    },
    {
      "item":"aether_redux:sentry_chip",
    }
    
  ],
  "level": 2,
  "result": "etshtinker:echo_slash",
  "slots": {
    "upgrades": 1
  },
  "tools": {
    "item": "etshtinker:constrained_plasma_saber"
  }
})
event.custom({
  "type": "tconstruct:modifier_salvage",
  "modifier": "etshtinker:echo_slash",
  "slots": {
    "upgrades": 1
  },
  "tools": {
    "item": "etshtinker:constrained_plasma_saber"
  }
})

event.custom({
  "type": "tconstruct:modifier",
  "allow_crystal": true,
  "inputs": [
    {
      "item": "pneumaticcraft:pneumatic_wrench",
    },
    {
      "item":"mekanism:configurator",
    },
    {
      "item":"thermal:wrench",
    },
    {
      "item":"immersiveengineering:hammer",
    },
    {
      "item":"pneumaticcraft:printed_circuit_board",
    }
  ],
  "level": 1,
  "result": "etshtinker:modular_modification",
  "slots": {
    "abilities": 1
  },
  "tools": {
    "item": "etshtinker:ionized_cannon"
  }
})
event.custom({
  "type": "tconstruct:modifier_salvage",
  "modifier": "etshtinker:modular_modification",
  "slots": {
    "abilities": 1
  },
  "tools": {
    "item": "etshtinker:ionized_cannon"
  }
})

event.custom({
  "type": "tconstruct:modifier",
  "allow_crystal": false,
  "inputs": [
    {
      "item": "mekanism:ultimate_control_circuit",
    },
    {
      "item":"extendedcrafting:flux_star",
    },
    {
      "item":"mekanism:ultimate_control_circuit",
    },
    {
      "item":"mekanism:electrolytic_core",
    },
    {
      "item":"mekanism:electrolytic_core",
    }
  ],
  "level": 2,
  "result": "etshtinker:multishotplasma",
  "slots": {
    "abilities": 1
  },
  "tools": {
    "item": "etshtinker:ionized_cannon"
  }
})

event.custom({
  "type": "tconstruct:modifier",
  "allow_crystal": false,
  "inputs": [
    {
      "item": "etshtinker:electronium",
      "amount_needed": 4
    },
    {
      "item":"extendedcrafting:flux_star",
      "amount_needed": 2
    },
    {
      "item":"etshtinker:protonium",
      "amount_needed": 4
    }
  ],
  "level": 3,
  "result": "etshtinker:multishotplasma",
  "slots": {
    "abilities": 1
  },
  "tools": {
    "item": "etshtinker:ionized_cannon"
  }
})


  addOverslime("aether:swet_ball", 120)
  addOverslime("aether_redux:golden_swet_ball", 120)
  addOverslime("aether_redux:vanilla_swet_ball", 120)
  addOverslime("aether_redux:dark_swet_ball", 120)
  addOverslime("industrialforegoing:pink_slime", 480)
})