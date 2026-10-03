ServerEvents.recipes(event => {
  event.replaceInput({mod:'appbot',type:'crafting_shaped',output:'appbot:mana_cell_housing'}, 'botania:life_essence','botania:quartz_mana')
  event.smithing('projecte:rm_helmet','projecte:dm_helmet','projecte:red_matter_block')
  event.smithing('projecte:rm_chestplate','projecte:dm_chestplate','projecte:red_matter_block')
  event.smithing('projecte:rm_leggings','projecte:dm_leggings','projecte:red_matter_block')
  event.smithing('projecte:rm_boots','projecte:dm_boots','projecte:red_matter_block')
  event.recipes.botania.mana_infusion('iceandfire:dread_shard', 'botania:quartz_dark', 20000)
  event.recipes.botania.mana_infusion('projecte:alchemical_coal', ['minecraft:coal'], 12500, 'kubejs:philosophers_catalyst')
  event.recipes.botania.mana_infusion('projecte:mobius_fuel', ['projecte:alchemical_coal'], 50000, 'kubejs:philosophers_catalyst')
  event.recipes.botania.mana_infusion('projecte:aeternalis_fuel', ['projecte:mobius_fuel'], 200000, 'kubejs:philosophers_catalyst')
  event.recipes.botania.mana_infusion('ae2:certus_quartz_crystal', ['minecraft:lapis_lazuli'], 4000)
  event.recipes.botania.mana_infusion('kubejs:dust_mana', ['botania:pixie_dust'], 10000)
  event.recipes.botania.terra_plate('dreadsteel:dreadsteel_ingot', ['minecraft:blaze_powder', 'tinkerscalibration:witherium_ingot','minecraft:nether_brick', 'botania:elementium_ingot', 'botania:quartz_dark', 'iceandfire:dread_shard'], 500000)
  event.recipes.botania.terra_plate('solidarytinker:magicuranium_ingot', ['#forge:ingots/uranium', 'tinkerscalibration:oraclium_ingot','mythicbotany:alfsteel_ingot','botania:gaia_ingot','botanicalmachinery:mana_emerald'], 250000)
  event.recipes.botania.terra_plate('projecte:red_matter', ['etshtinker:evil_orb', 'cti:magic_crystal', 'projecte:dark_matter', 'botania:quartz_red'], 500000)
  event.recipes.botania.terra_plate('projecte:dm_helmet', ['botania:terrasteel_helmet', 'tconstruct:hepatizon_block', 'mythicbotany:asgard_rune', 'mythicbotany:helheim_rune','mythicbotany:vanaheim_rune','projecte:dark_matter_block'], 1000000)
  event.recipes.botania.terra_plate('projecte:dm_chestplate', ['botania:terrasteel_chestplate', 'tconstruct:hepatizon_block', 'mythicbotany:midgard_rune', 'mythicbotany:helheim_rune','mythicbotany:alfheim_rune','projecte:dark_matter_block'], 1000000)
  event.recipes.botania.terra_plate('projecte:dm_leggings', ['botania:terrasteel_leggings', 'tconstruct:hepatizon_block', 'mythicbotany:muspelheim_rune', 'mythicbotany:helheim_rune','mythicbotany:joetunheim_rune','projecte:dark_matter_block'], 1000000)
  event.recipes.botania.terra_plate('projecte:dm_boots', ['botania:terrasteel_boots','tconstruct:hepatizon_block', 'mythicbotany:helheim_rune', 'mythicbotany:nidavellir_rune','mythicbotany:vanaheim_rune','projecte:dark_matter_block'], 1000000)

  event.recipes.botania.petal_apothecary('cti:reactive_flower',['botania:red_petal','botania:yellow_petal','botania:light_blue_petal','botania:brown_petal','minecraft:blaze_powder','thermal:blitz_powder','thermal:blizz_powder','thermal:basalz_powder'])

  event.remove({id:'botania:runic_altar/fire'})
  event.remove({id:'botania:runic_altar/earth'})
  event.remove({id:'botania:runic_altar/water'})
  event.remove({id:'botania:runic_altar/air'})

event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 1,
  "input": {
    "item": "botania:livingrock"
  },
  "output": "botania:rune_fire",
  "pedestalItems": [
    {
      "item": {
        "item": "kubejs:dust_pyrotheum"
      }
    },
    {
      "item": {
        "item": "minecraft:netherite_ingot"
      }
    },
    {
      "item": {
        "item": "ars_nouveau:fire_essence"
      }
    }
  ],
  "source": 100
})
event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 1,
  "input": {
    "item": "botania:livingrock"
  },
  "output": "botania:rune_water",
  "pedestalItems": [
    {
      "item": {
        "item": "kubejs:dust_cryotheum"
      }
    },
    {
      "item": {
        "item": "etshtinker:blizz_enderium"
      }
    },
    {
      "item": {
        "item": "ars_nouveau:water_essence"
      }
    }
  ],
  "source": 100
})
event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 1,
  "input": {
    "item": "botania:livingrock"
  },
  "output": "botania:rune_earth",
  "pedestalItems": [
    {
      "item": {
        "item": "kubejs:dust_petrotheum"
      }
    },
    {
      "item": {
        "item": "etshtinker:basalz_signalum"
      }
    },
    {
      "item": {
        "item": "ars_nouveau:earth_essence"
      }
    }
  ],
  "source": 100
})
event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 1,
  "input": {
    "item": "botania:livingrock"
  },
  "output": "botania:rune_air",
  "pedestalItems": [
    {
      "item": {
        "item": "kubejs:dust_aerotheum"
      }
    },
    {
      "item": {
        "item": "etshtinker:blitz_lumium"
      }
    },
    {
      "item": {
        "item": "ars_nouveau:air_essence"
      }
    }
  ],
  "source": 100
})

  event.shaped(Item.of('kubejs:philosophers_catalyst', 1), [
    'ABA',
    'BCB',
    'ABA'
  ],
    {
      A: 'minecraft:glowstone_dust',
      B: 'minecraft:diamond',
      C: 'botania:alchemy_catalyst'
   }
   )
   event.shaped(Item.of('mythicbotany:mana_collector', 1), [
    'ABA',
    'BCB',
    'ADA'
  ],
    {
      A: 'botania:dreamwood',
      B: 'botania:terrasteel_ingot',
      C: 'botania:pixie_dust',
      D: 'botania:rune_mana'
   }
   )
  event.custom({
    "type": "mythicbotany:infuser",
    "fromColor": 3683394,
    "group": "infuser",
    "ingredients": [
      {
        "item": "projecte:dark_matter"
      },
      {
        "item": "cti:magic_crystal"
      },
      {
        "item": "etshtinker:evil_orb"
      },
      {
        "item": "botania:quartz_red"
      },
    ],
    "mana": 500000,
    "output": {
      "count": 1,
      "item": "projecte:red_matter"
    },
    "toColor": 16729871
  })
  event.shaped(Item.of('cti:mana_interface',1), [
    'ABA',
    'BCB',
    'ADA'
  ],
    {
      A: 'botania:life_essence',
      B: 'botania:gaia_ingot',
      C: 'ae2:interface',
      D: 'mythicbotany:mana_collector'
   }
   )
   event.remove({id:'botania:runic_altar'})
   event.remove({id:'botania:runic_altar_alt'})
   event.remove({id:'botanicalmachinery:runic_altar'})

  event.shaped(Item.of('botania:runic_altar',1), [
    '   ',
    'BEC',
    'AFD'
  ],
    {
      A: 'botania:rune_water',
      B: 'botania:rune_fire',
      C: 'botania:rune_air',
      D: 'botania:rune_earth',
      E: 'botania:livingrock',
      F: 'botania:mana_pearl'
   }
  )
  event.remove({id:'botania:terra_plate'})
  event.shaped(Item.of('botania:terra_plate',1), [
    'AAA',
    'CGD',
    'BFE'
  ],
    {
      A: 'minecraft:lapis_block',
      B: 'botania:rune_spring',
      C: 'botania:rune_summer',
      D: 'botania:rune_autumn',
      E: 'botania:rune_winter',
      F: 'botania:rune_mana',
      G: 'botania:manasteel_block'
   }
  )
  event.remove({id:'mythicbotany:mana_infuser'})
  event.recipes.botania.terra_plate('mythicbotany:mana_infuser', 
    [
      'botania:dragonstone_block',
      'mythicbotany:nidavellir_rune',
      'mythicbotany:niflheim_rune', 
      'mythicbotany:muspelheim_rune',
      'mythicbotany:joetunheim_rune',
      'mythicbotany:midgard_rune',
      'mythicbotany:alfheim_rune',
      'mythicbotany:asgard_rune',
      'mythicbotany:vanaheim_rune',
      'mythicbotany:helheim_rune'
    ], 
    4000000
  )
  event.remove({id:'botania:gaia_ingot'})

  event.custom({
    "type": "mythicbotany:infuser",
    "fromColor": 0xFF7F27,
    "group": "infuser",
    "ingredients": [
      {
        "item": "minecraft:netherite_scrap"
      },
      {
        "item": "minecraft:gold_ingot"
      },
      {
        "item": "kubejs:tungsten_ingot"
      }
    ],
    "mana": 125000,
    "output": {
      "count": 1,
      "item": "minecraft:netherite_ingot"
    },
    "toColor": 0x261B1B
  })
  event.custom({
    "type": "mythicbotany:infuser",
    "fromColor": 0xFFffFF,
    "group": "infuser",
    "ingredients": [
      {
        "item": "etshtinker:basalz_signalum"
      },
      {
        "item": "etshtinker:blitz_lumium"
      },
      {
        "item": "etshtinker:blizz_enderium"
      }
    ],
    "mana": 750000,
    "output": {
      "count": 3,
      "item": "etshtinker:activated_chroma_plate"
    },
    "toColor": 0xFFFFFF
  })

})