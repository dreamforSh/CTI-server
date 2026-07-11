ServerEvents.recipes(event => {
   event.shapeless(Item.of('create_central_kitchen:cherry_pie_slice',4), [
      '4x farmersdelight:cake_slice',
      'cherrytinker:cherry',
   ]
   )
   event.shapeless(Item.of('create_central_kitchen:truffle_pie_slice',4), [
      '4x farmersdelight:cake_slice',
      'minecraft:brown_mushroom',
   ]
   )
   event.shapeless(Item.of('create_central_kitchen:mulberry_pie_slice',4), [
      '4x farmersdelight:cake_slice',
      'ars_nouveau:source_berry',
   ]
   )
   event.shapeless(Item.of('create_central_kitchen:yucca_cake_slice',4), [
      '4x farmersdelight:cake_slice',
      'farmersrespite:green_tea_leaves',
   ]
   )
   event.shapeless(Item.of('create_central_kitchen:aloe_cake_slice',4), [
      '4x farmersdelight:cake_slice',
      'botania:lime_petal',
   ]
   )
   event.shapeless(Item.of('create_central_kitchen:passionfruit_cake_slice',4), [
      '4x farmersdelight:cake_slice',
      'botania:yellow_petal',
   ]
   )
   event.shapeless(Item.of('extradelight:goat_stew_feast',1), [
      'extradelight:lamb_stew_feast',
   ]
   )
   event.shapeless(Item.of('extradelight:lamb_stew_feast',1), [
      'extradelight:goat_stew_feast',
   ]
   )
   event.shapeless(Item.of('create_central_kitchen:sweet_berry_cake_slice',4), [
      '4x farmersdelight:cake_slice',
      'minecraft:sweet_berries',
   ]
   )
   event.shapeless(Item.of('create_central_kitchen:pumpkin_pie_slice',1), [
      'extradelight:pumpkin_pie_slice',
   ]
   )
   event.shapeless(Item.of('extradelight:pumpkin_pie_slice',1), [
      'create_central_kitchen:pumpkin_pie_slice',
   ]
   )
   event.shapeless(Item.of('culturaldelights:popcorn',1), [
      'extradelight:popcorn',
   ]
   )
   event.shapeless(Item.of('extradelight:popcorn',1), [
      'culturaldelights:popcorn',
   ]
   )

   event.shapeless(Item.of('farmersdelight:fried_egg',1), [
      'tinkers_thinking:fried_egg',
   ]
   )
   event.shapeless(Item.of('tinkers_thinking:fried_egg',1), [
      'farmersdelight:fried_egg',
   ]
   )

   event.shapeless(Item.of('thermal:tea',1), [
      'farmersrespite:green_tea_leaves',
   ]
   )
   event.shapeless(Item.of('farmersrespite:green_tea_leaves',1), [
      'thermal:tea',
   ]
   )
   event.shapeless(Item.of('farmersrespite:tea_seeds',1), [
      'thermal:tea_seeds',
   ]
   )
   event.shapeless(Item.of('thermal:tea_seeds',1), [
      'farmersrespite:tea_seeds',
   ]
   )


   event.shapeless(Item.of('extradelight:grilled_corn_on_cob',1), [
      'thermal:cooked_corn',
   ]
   )
   event.shapeless(Item.of('thermal:cooked_corn',1), [
      'extradelight:grilled_corn_on_cob',
   ]
   )


   event.shapeless(Item.of('culturaldelights:eggplant',1), [
      'thermal:eggplant',
   ]
   )
   event.shapeless(Item.of('thermal:eggplant',1), [
      'culturaldelights:eggplant',
   ]
   )

   event.shapeless(Item.of('farmersdelight:rice',1), [
      'thermal:rice',
   ]
   )
   event.shapeless(Item.of('thermal:rice',1), [
      'farmersdelight:rice',
   ]
   )

   event.shapeless(Item.of('thermal:corn',1), [
      'culturaldelights:corn_cob',
   ]
   )
   event.shapeless(Item.of('culturaldelights:corn_cob',1), [
      'extradelight:unshucked_corn',
   ]
   )
   event.shapeless(Item.of('extradelight:unshucked_corn',1), [
      'thermal:corn',
   ]
   )

   event.shapeless(Item.of('thermal:onion',1), [
      'farmersdelight:onion',
   ]
   )
   event.shapeless(Item.of('farmersdelight:onion',1), [
      'thermal:onion',
   ]
   )

   event.shapeless(Item.of('thermal:tomato',1), [
      'farmersdelight:tomato',
   ]
   )
   event.shapeless(Item.of('farmersdelight:tomato',1), [
      'thermal:tomato',
   ]
   )

   event.shapeless(Item.of('kubejs:sausage',1), [
      'biomancy:elastic_fibers',
      'farmersdelight:bacon',
   ]
   )

   event.shapeless(Item.of('lightmanscurrency:coin_chocolate_copper',1), [
      'create:bar_of_chocolate',
      'lightmanscurrency:coin_copper',
   ]
   )
   event.shapeless(Item.of('lightmanscurrency:coin_chocolate_iron',1), [
      'create:bar_of_chocolate',
      'lightmanscurrency:coin_iron',
   ]
   )
   event.shapeless(Item.of('lightmanscurrency:coin_chocolate_gold',1), [
      'create:bar_of_chocolate',
      'lightmanscurrency:coin_gold',
   ]
   )
   event.shapeless(Item.of('lightmanscurrency:coin_chocolate_emerald',1), [
      'create:bar_of_chocolate',
      'lightmanscurrency:coin_emerald',
   ]
   )
   event.shapeless(Item.of('lightmanscurrency:coin_chocolate_diamond',1), [
      'create:bar_of_chocolate',
      'lightmanscurrency:coin_diamond',
   ]
   )
   event.shapeless(Item.of('lightmanscurrency:coin_chocolate_netherite',1), [
      'create:bar_of_chocolate',
      'lightmanscurrency:coin_netherite',
   ]
   )
   event.shapeless(Item.of('obscure_api:vial_of_knowledge',1), [
      'minecraft:glass_bottle',
      'create:experience_nugget',
   ]
   )
   event.shapeless(Item.of('aether:white_apple',1), [
      'minecraft:apple',
      'biomancy:healing_additive',
   ]
   )


   event.shapeless(Item.of('extradelight:sextuple_meat_treat',1), [
      'farmersdelight:salmon_slice',
      'farmersdelight:cod_slice',
      'farmersdelight:minced_beef',
      'farmersdelight:chicken_cuts',
      'farmersdelight:bacon',
      'farmersdelight:mutton_chops',
      'minecraft:sugar',
   ]
   )
   event.shapeless(Item.of('iceandfire:cannoli',1), [
      'iceandfire:lightning_dragon_flesh',
      'extradelight:whipped_cream',
      'farmersdelight:minced_beef',
      'culturaldelights:tortilla',
      'farmersdelight:onion',
   ]
   )
   event.smoking('kubejs:cooked_sausage', 'kubejs:sausage')
   event.recipes.create.mixing(Fluid.of('kubejs:vinegar').withAmount(1000), ['2x minecraft:sweet_berries','minecraft:sugar',Fluid.of('minecraft:water').withAmount(1000)]).heated()
   event.recipes.create.mixing('extradelight:butter', 'extradelight:whipped_cream').superheated()
   event.recipes.create.mixing( 'extradelight:whipped_cream',Fluid.of('minecraft:milk',250)).heated()
   event.recipes.create.mixing(['2x extradelight:fish_flakes','2x minecraft:kelp','4x minecraft:bowl'], '4x extradelight:furikake')
   event.recipes.create.haunting('extradelight:fish_flakes','#forge:cooked_fishes')
   event.recipes.create.haunting('extradelight:bad_food','minecraft:mushroom_stew')
   event.recipes.create.filling('extradelight:cooking_oil', ['minecraft:glass_bottle', Fluid.of('createaddition:seed_oil').withAmount(250)])
   event.recipes.create.filling('extradelight:vinegar', ['minecraft:glass_bottle', Fluid.of('kubejs:vinegar').withAmount(250)]),
   event.recipes.create.emptying([Fluid.of('kubejs:vinegar',250),'minecraft:glass_bottle'],'extradelight:vinegar')
   event.recipes.thermal.pulverizer(Item.of('extradelight:ground_cinnamon').withChance(3.5), 'extradelight:raw_cinnamon').energy(1000)
   event.recipes.thermal.insolator(['extradelight:ginger',Item.of('extradelight:ginger').withChance(2.1)],'extradelight:ginger').water(1000).energy(10000)
   event.recipes.thermal.insolator(['extradelight:mint',Item.of('extradelight:mint').withChance(4.1)],'extradelight:mint').water(2000).energy(8000)
   event.recipes.thermal.insolator(['culturaldelights:eggplant',Item.of('culturaldelights:white_eggplant').withChance(0.25),Item.of('culturaldelights:eggplant_seeds').withChance(1.1)],'culturaldelights:eggplant_seeds').water(2000).energy(8000)
   event.recipes.thermal.insolator([Item.of('thermal:tea').withChance(2.5),Item.of('thermal:tea_seeds').withChance(1.1)],'thermal:tea_seeds').water(1000).energy(20000)
   event.recipes.thermal.insolator([Item.of('farmersrespite:coffee_berries').withChance(1.31),'farmersrespite:coffee_beans'],'farmersrespite:coffee_beans').water(1000).energy(100000)

   event.recipes.thermal.insolator(['undergarden:gloomgourd',Item.of('undergarden:gloomgourd_seeds').withChance(1.1)],'undergarden:gloomgourd_seeds').water(1000).energy(20000)
   event.recipes.thermal.insolator(['culturaldelights:cucumber',Item.of('culturaldelights:cucumber_seeds').withChance(1.1)],'culturaldelights:cucumber_seeds').water(1000).energy(20000)
   event.recipes.thermal.insolator(['nethersdelight:propelpearl',Item.of('nethersdelight:propelplant_cane').withChance(1.6),Item.of('nethersdelight:propelpearl').withChance(1.31)],'nethersdelight:propelpearl').water(1000).energy(60000)
   event.recipes.farmersdelight.cooking(['extradelight:vinegar','minecraft:sugar','culturaldelights:cucumber'],'culturaldelights:pickle',10,40)
   event.recipes.farmersdelight.cooking(['kubejs:heart','minecraft:wheat_seeds','kubejs:liver','kubejs:liver','kubejs:brain','kubejs:brain',],'extradelight:haggis_block_item',10,80,'minecraft:bowl')
   event.recipes.farmersdelight.cooking(['minecraft:beef','minecraft:porkchop','minecraft:mutton','#extradelight:processed/tomato','#extradelight:processed/onion','extradelight:cooking_oil',],'2x extradelight:bhutan',10,80,'minecraft:bowl')
})