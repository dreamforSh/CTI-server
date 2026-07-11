ServerEvents.recipes(event => {
    //工作盆
    event.recipes.create.compacting([Item.of('immersiveengineering:blastbrick_reinforced',3)], ['5x minecraft:nether_brick', '3x minecraft:brick',Fluid.of('etshtinker:molten_hardlead').withAmount(270)])
    event.recipes.create.compacting([Item.of('tinkers_reforged:duralumin_ingot',2)],['2x minecraft:copper_ingot','4x immersiveengineering:ingot_aluminum'])
    event.recipes.create.mixing([Item.of('tinkers_thinking:chlorophyte_ingot',4)],['4x minecraft:iron_ingot','tinkers_thinking:chlorophyte_compound',Fluid.of('minecraft:water').withAmount(1000)]).heated()
    event.recipes.create.mixing(Fluid.of('cherrytinker:sun_cherryfuel').withAmount(1000), [Fluid.of('tconstruct:blazing_blood').withAmount(1000),'cherrytinker:cherrygem'])
    event.recipes.create.mixing(Fluid.of('cherrytinker:moon_cherryfuel').withAmount(1000), [Fluid.of('tconstruct:magma').withAmount(1000),'cherrytinker:cherrygem'])
    event.recipes.create.mixing(Fluid.of('cti:lava_heated').withAmount(1000), [Fluid.of('tconstruct:blazing_blood').withAmount(500),Fluid.of('minecraft:lava').withAmount(500),'kubejs:thermite'])
    event.recipes.create.mixing(Fluid.of('cti:lava_overheated').withAmount(1000), [Fluid.of('cti:lava_heated').withAmount(500),'kubejs:aetheric_thermite'])
    event.recipes.create.mixing(Fluid.of('cti:lava_atomic').withAmount(1000), [Fluid.of('cti:lava_plasmatic').withAmount(1000),'tinkers_ingenuity:bedrock_alloy_ingot','aether_redux:gravitite_ingot'])
    event.recipes.create.mixing(Item.of('create:brass_ingot',2), [Fluid.of('tconstruct:molten_copper').withAmount(90),'create:zinc_ingot'])
    event.recipes.create.mixing(Item.of('createutilities:void_steel_ingot',2), ['2x create:brass_ingot','2x minecraft:ender_pearl'])

    event.recipes.create.mixing(Fluid.of('kubejs:redstone_additive').withAmount(500), [Fluid.of('immersiveengineering:phenolic_resin').withAmount(500),'32x minecraft:redstone']).superheated()
    event.recipes.create.mixing(Fluid.of('kubejs:diamond_additive').withAmount(500), [Fluid.of('immersiveengineering:phenolic_resin').withAmount(500),'32x thermal:diamond_dust']).superheated()
    event.recipes.create.mixing(Fluid.of('kubejs:obsidian_additive').withAmount(500), [Fluid.of('immersiveengineering:phenolic_resin').withAmount(500),'32x create:powdered_obsidian']).superheated()

    event.recipes.create.mixing(Item.of('ae2:fluix_crystal',32), ['12x minecraft:quartz','12x ae2:charged_certus_quartz_crystal',Fluid.of('thermal:redstone').withAmount(1000)])
    //烈光合金部件
    event.recipes.create.deploying([Item.of('tconstruct:helmet_plating', '{Material:"cti:xenoglarium"}').withChance(0.2),Item.of('tconstruct:chestplate_plating', '{Material:"cti:xenoglarium"}').withChance(0.2),Item.of('tconstruct:leggings_plating', '{Material:"cti:xenoglarium"}').withChance(0.2),Item.of('tconstruct:boots_plating', '{Material:"cti:xenoglarium"}').withChance(0.2),Item.of('etshtinker:ionizer', '{Material:"cti:xenoglarium"}').withChance(0.05),Item.of('etshtinker:plasma_generator', '{Material:"cti:xenoglarium"}').withChance(0.05)], ['etshtinker:stellaralloy', 'cti:xenoglarium_ingot'])
    event.recipes.create.deploying([Item.of('solidarytinker:mining_core', '{Material:"tconstruct:ancient_hide"}')],['mekanism:alloy_atomic', 'minecraft:netherite_scrap'])
    event.recipes.create.deploying([Item.of('tconstruct:helmet_plating', '{Material:"kubejs:sturdy_sheet"}')],['tconstruct:helmet_plating_dummy', 'create:sturdy_sheet'])
    event.recipes.create.deploying([Item.of('tconstruct:chestplate_plating', '{Material:"kubejs:sturdy_sheet"}')],['tconstruct:chestplate_plating_dummy', 'create:sturdy_sheet'])
    event.recipes.create.deploying([Item.of('tconstruct:leggings_plating', '{Material:"kubejs:sturdy_sheet"}')],['tconstruct:leggings_plating_dummy', 'create:sturdy_sheet'])
    event.recipes.create.deploying([Item.of('tconstruct:boots_plating', '{Material:"kubejs:sturdy_sheet"}')],['tconstruct:boots_plating_dummy', 'create:sturdy_sheet'])
    event.recipes.create.deploying('ae2:printed_silicon',['ae2:silicon', 'kubejs:universal_press']).keepHeldItem()
    event.recipes.create.deploying('ae2:printed_silicon',['ae2:silicon', 'ae2:silicon_press']).keepHeldItem()
    event.recipes.create.deploying('ae2:printed_calculation_processor',['ae2:certus_quartz_crystal', 'kubejs:universal_press']).keepHeldItem()
    event.recipes.create.deploying('ae2:printed_calculation_processor',['ae2:certus_quartz_crystal', 'ae2:calculation_processor_press']).keepHeldItem()
    event.recipes.create.deploying('ae2:printed_engineering_processor',['minecraft:diamond', 'kubejs:universal_press']).keepHeldItem()
    event.recipes.create.deploying('ae2:printed_engineering_processor',['minecraft:diamond', 'ae2:engineering_processor_press']).keepHeldItem()
    event.recipes.create.deploying('ae2:printed_logic_processor',['minecraft:gold_ingot', 'kubejs:universal_press']).keepHeldItem()
    event.recipes.create.deploying('ae2:printed_logic_processor',['minecraft:gold_ingot', 'ae2:logic_processor_press']).keepHeldItem()
    event.recipes.create.deploying('kubejs:universal_press',['minecraft:iron_block', 'kubejs:universal_press']).keepHeldItem()

    event.recipes.create.haunting('thermal:rich_slag','thermal:slag')

event.recipes.create.sequenced_assembly([
    Item.of('ae2:calculation_processor')
]  ,Item.of('ae2:printed_silicon'), [
    event.recipes.createDeploying('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet', 'ae2:printed_calculation_processor']),
    event.recipes.createPressing('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet'),
    event.recipes.create.filling('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet', Fluid.of('thermal:redstone').withAmount(250)]),
]).transitionalItem('create:unprocessed_obsidian_sheet').loops(1)

event.recipes.create.sequenced_assembly([
    Item.of('ae2:engineering_processor')
]  ,Item.of('ae2:printed_silicon'), [
    event.recipes.createDeploying('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet', 'ae2:printed_engineering_processor']),
    event.recipes.createPressing('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet'),
    event.recipes.create.filling('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet', Fluid.of('thermal:redstone').withAmount(250)]),
]).transitionalItem('create:unprocessed_obsidian_sheet').loops(1)

event.recipes.create.sequenced_assembly([
    Item.of('ae2:logic_processor')
]  ,Item.of('ae2:printed_silicon'), [
    event.recipes.createDeploying('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet', 'ae2:printed_logic_processor']),
    event.recipes.createPressing('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet'),
    event.recipes.create.filling('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet', Fluid.of('thermal:redstone').withAmount(250)]),
]).transitionalItem('create:unprocessed_obsidian_sheet').loops(1)

  event.recipes.create.sequenced_assembly([
    Item.of('create:sturdy_sheet')
  ], Item.of('create:powdered_obsidian'), [
    event.recipes.create.filling('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet', Fluid.of("tconstruct:blazing_blood").withAmount(250)]),
    event.recipes.createPressing('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet'),
    event.recipes.createPressing('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet'),
    event.recipes.createPressing('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet'),
  ]).transitionalItem('create:unprocessed_obsidian_sheet').loops(2)


    event.recipes.create.sequenced_assembly([
    Item.of('mekanism:mekasuit_helmet')
]  ,Item.of('pneumaticcraft:pneumatic_helmet'), [
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:stablized_exotic_matter').withAmount(1000)]),
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:molten_stellaralloy').withAmount(810)]),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'kubejs:electronium_block']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'avaritia:crystal_matrix']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'kubejs:protonium_block']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekaevolution:cosmic_control_circuit']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekanism:ultimate_induction_cell']),
]).transitionalItem('kubejs:incomplete_mekasuit').loops(10)
    event.recipes.create.sequenced_assembly([
    Item.of('mekanism:mekasuit_bodyarmor')
]  ,Item.of('pneumaticcraft:pneumatic_chestplate'), [
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:stablized_exotic_matter').withAmount(1000)]),
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('solidarytinker:molten_dwarf').withAmount(810)]),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'kubejs:stellaralloy_block']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'kubejs:reactor_casing']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'kubejs:protonium_block']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekaevolution:cosmic_control_circuit']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekanism:ultimate_induction_cell']),
]).transitionalItem('kubejs:incomplete_mekasuit').loops(16)
    event.recipes.create.sequenced_assembly([
    Item.of('mekanism:mekasuit_pants')
]  ,Item.of('pneumaticcraft:pneumatic_leggings'), [
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:stablized_exotic_matter').withAmount(1000)]),
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('solidarytinker:molten_extremelycoldsteel').withAmount(810)]),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'etshtinker:trinity_intereactive_alloy']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'avaritia:crystal_matrix']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'kubejs:protonium_block']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekaevolution:cosmic_control_circuit']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekanism:ultimate_induction_cell']),
]).transitionalItem('kubejs:incomplete_mekasuit').loops(14)
    event.recipes.create.sequenced_assembly([
    Item.of('mekanism:mekasuit_boots')
]  ,Item.of('pneumaticcraft:pneumatic_boots'), [
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:stablized_exotic_matter').withAmount(1000)]),
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:overchargedneutronium').withAmount(1000)]),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'tinkersinnovation:decline_block']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'kubejs:ultra_dense_block']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'kubejs:protonium_block']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekaevolution:cosmic_control_circuit']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekanism:ultimate_induction_cell']),
]).transitionalItem('kubejs:incomplete_mekasuit').loops(8)
    event.recipes.create.sequenced_assembly([
    Item.of('kubejs:living_control_circuit')
]  ,Item.of('mekanism:ultimate_control_circuit'), [
    event.recipes.createCutting('kubejs:incomplete_living_control_circuit', 'kubejs:incomplete_living_control_circuit'),
    event.recipes.createDeploying('kubejs:incomplete_living_control_circuit', ['kubejs:incomplete_living_control_circuit', 'biomancy:flesh_bits']),
    event.recipes.createDeploying('kubejs:incomplete_living_control_circuit', ['kubejs:incomplete_living_control_circuit', 'biomancy:flesh_bits']),
    event.recipes.createDeploying('kubejs:incomplete_living_control_circuit', ['kubejs:incomplete_living_control_circuit', 'biomancy:elastic_fibers']),
    event.recipes.createDeploying('kubejs:incomplete_living_control_circuit', ['kubejs:incomplete_living_control_circuit', 'biomancy:regenerative_fluid']),
    event.recipes.create.filling( 'kubejs:incomplete_living_control_circuit', ['kubejs:incomplete_living_control_circuit', Fluid.of('biomancy:acid').withAmount(1000)]),
]).transitionalItem('kubejs:incomplete_mekasuit').loops(2)

//简化精密构建
event.recipes.create.sequenced_assembly([
    Item.of('create:precision_mechanism')
]  ,Item.of("#forge:plates/gold"), [
    event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
    event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
    event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:nuggets/iron']),
]).transitionalItem('create:incomplete_precision_mechanism').loops(3)

event.shaped(Item.of('createoreexcavation:vein_finder',1), [
        'DC ',
        'BA ',
        '  A'
    ],
    {
        A: 'minecraft:stick',
        B: 'minecraft:amethyst_shard',
        C: 'minecraft:emerald',
        D: 'minecraft:ender_eye',
    })

event.recipes.createMechanicalCrafting('cti:roxy_ingot', [
  'AABAA',
  'ACDEA',
  'AAFAA'
], {
  A: 'ae2:not_so_mysterious_cube',
  B: 'ars_nouveau:apprentice_hood',
  C: 'l2complements:poseidite_ingot',
  D: 'dummmmmmy:target_dummy',
  E: 'etshtinker:electronium',
  F: 'ae2:item_storage_cell_256k'
})
event.recipes.createMechanicalCrafting('extendedcrafting:advanced_table', [
  'ABBBA',
  'AEEEA',
  'ADCDA',
  'AEEEA',
  'AAAAA'
], {
  A: 'thermal:steel_plate',
  B: 'create:brass_sheet',
  C: 'minecraft:crafting_table',
  D: 'create:mechanical_crafter',
  E: 'etshtinker:hardlead_plate'
})

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "  A  ",
    " BCD ",
    "AEFGA",
    " HIJ ",
    "  A  "
  ],
  "key": {
    "A": {
      "item": "etshtinker:bismuth_ingot"
    },
    "B": {
      "item": "create:brass_ingot"
    },
    "C": {
      "item": "tconstruct:rose_gold_ingot"
    },
    "D": {
      "item": "tinkers_ingenuity:blood_binding_ingot"
    },
    "E": {
      "item": "tinkers_thinking:chlorophyte_ingot"
    },
    "F": {
      "item": "tconstruct:hepatizon_ingot"
    },
    "G": {
      "item": "tconstruct:manyullyn_ingot"
    },
    "H": {
      "item": "tinkers_reforged:duralumin_ingot"
    },
    "I": {
      "item": "tconstruct:slimesteel_ingot"
    },
    "J": {
      "item": "tconstruct:cobalt_ingot"
    }
  },
  "result": {
    "item": "tinkersinnovation:polychrome_mix",
    "count":2
  }
})
event.recipes.createMechanicalCrafting('3x tinkersinnovation:polychrome_mix', [
  '  A  ',
  ' BCD ',
  'AEFGA',
  ' HIJ ',
  '  A  '
], {
  A: 'etshtinker:bismuth_ingot',
  B: 'create:brass_ingot',
  C: 'tconstruct:rose_gold_ingot',
  D: 'tinkers_ingenuity:blood_binding_ingot',
  E: 'tinkers_thinking:chlorophyte_ingot',
  F:'tconstruct:hepatizon_ingot',
  G:'tconstruct:manyullyn_ingot',
  H:'tinkers_reforged:duralumin_ingot',
  I:'tconstruct:slimesteel_ingot',
  J:'tconstruct:cobalt_ingot'
})

event.custom({
  "type": "create:mixing",
  "heatRequirement": "superheated",
  "ingredients": [
    {
      "amount": 250,
      "fluid": "tconstruct:blazing_blood"
    },
    {
      "item": "tinkers_ingenuity:blood_steel_ingot"
    },
    {
      "item": "minecraft:gold_ingot"
    }
  ],
  "results": [
    {
      "item": "tinkers_ingenuity:blood_binding_ingot",
      "count":2
    }
  ]
})

event.remove('createaddition:compat/tconstruct/slimesteel')
event.recipes.create.sequenced_assembly([
    Item.of('tconstruct:slimesteel_ingot',2)
]  ,Item.of("minecraft:iron_ingot"), [
    event.recipes.createDeploying('minecraft:iron_ingot', ['minecraft:iron_ingot', 'tconstruct:seared_brick']),
    event.recipes.create.pressing('minecraft:iron_ingot','minecraft:iron_ingot'),
    event.recipes.create.filling( 'minecraft:iron_ingot', ['minecraft:iron_ingot', Fluid.of('tconstruct:sky_slime').withAmount(250)]),
    event.recipes.create.filling( 'minecraft:iron_ingot', ['minecraft:iron_ingot', Fluid.of('tconstruct:blazing_blood').withAmount(100)]),
]).transitionalItem('minecraft:iron_ingot').loops(2)
})