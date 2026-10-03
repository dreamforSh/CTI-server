ServerEvents.recipes(event => {
    let has_deep_singular = [
        'lapis', 'coal', 'redstone', 'emerald', 'diamond', 'iron', 'gold', 'copper', 'zinc', 'aluminum', 'lead', 'uranium', 'silver', 'nickel', 'tin', 'osmium'
    ]
    for (let i of has_deep_singular) {
        event.remove({ id: `create:crushing/${i}_ore` })
        event.remove({ id: `create:crushing/deepslate_${i}_ore` })
    }
    event.remove({ id: "create:crushing/nether_quartz_ore" })
    event.remove({ id: "create:crushing/nether_gold_ore" })
    event.remove({ id: "createoreexcavation:crushing/redstone_crushing"})
    let has_crushed_raw = [
        'iron', 'gold', 'copper', 'zinc', 'aluminum', 'lead', 'uranium', 'silver', 'nickel', 'tin', 'osmium'
    ]
    event.remove({ id: "create:crushing/moon_cheese_ore" })
    event.remove({ id: "create:crushing/moon_desh_ore" })
    event.remove({ id: "create:crushing/deepslate_desh_ore" })
    event.remove({ id: "create:crushing/mars_ostrum_ore" })
    event.remove({ id: "create:crushing/deepslate_ostrum_ore" })
    event.remove({ id: "create:crushing/venus_calorite_ore" })
    event.remove({ id: "create:crushing/deepslate_calorite_ore" })
    event.remove({ id: "create:crushing/moon_ice_shard_ore" })
    event.remove({ id: "create:crushing/galcio_ice_shard_ore" })
    event.remove({ id: "create:crushing/deepslate_ice_shard_ore" })
    event.remove({ id: "create:crushing/mars_ice_shard_ore" })
    for (let m of has_crushed_raw) {
        if (m === "copper") {
            //给铜单独拉高一点
            event.recipes.create.crushing([Item.of('create:crushed_raw_copper', 8), Item.of('create:crushed_raw_copper', 4).withChance(0.6), 'create:experience_nugget'], '#forge:ores/copper').processingTime(50);
        } else {
            event.recipes.create.crushing([Item.of(`create:crushed_raw_${m}`, 3), Item.of(`create:crushed_raw_${m}`, 1).withChance(0.75), 'create:experience_nugget'], `#forge:ores/${m}`).processingTime(50);
        }
        event.remove({ id: `create:crushing/raw_${m}_block` })
        event.remove({ id: `create:crushing/raw_${m}` })
        event.recipes.create.crushing([Item.of(`create:crushed_raw_${m}`, 18), Item.of(`create:crushed_raw_${m}`, 9).withChance(0.5), '9x create:experience_nugget'], `#forge:storage_blocks/raw_${m}`).processingTime(50);
        event.recipes.create.crushing([Item.of(`create:crushed_raw_${m}`, 2), Item.of(`create:crushed_raw_${m}`, 1).withChance(0.5), 'create:experience_nugget'], `#forge:raw_materials/${m}`).processingTime(50);
    }
   event.recipes.create.crushing([Item.of('minecraft:lapis_lazuli',10),Item.of('minecraft:lapis_lazuli',5).withChance(0.75),'create:experience_nugget'],'#forge:ores/lapis').processingTime(50);
   event.recipes.create.crushing([Item.of('minecraft:redstone',13),Item.of('minecraft:lapis_lazuli',6).withChance(0.8),'create:experience_nugget'],'#forge:ores/redstone').processingTime(50);
   event.recipes.create.crushing([Item.of('minecraft:coal',4),Item.of('minecraft:coal',2).withChance(0.75),'create:experience_nugget'],'#forge:ores/coal').processingTime(50);
   event.recipes.create.crushing([Item.of('minecraft:quartz',3),Item.of('minecraft:quartz',2).withChance(0.75),'create:experience_nugget'],'#forge:ores/quartz').processingTime(50);
   event.recipes.create.crushing([Item.of('minecraft:netherite_scrap',2),Item.of('minecraft:netherite_scrap',1).withChance(0.5),'10x create:experience_nugget'],'minecraft:ancient_debris').processingTime(50);
   event.recipes.create.crushing([Item.of('minecraft:diamond',3),Item.of('minecraft:diamond',1).withChance(0.75),Item.of('minecraft:emerald',1).withChance(0.8),'create:experience_nugget'],'#forge:ores/diamond').processingTime(50);
   event.recipes.create.crushing([Item.of('minecraft:emerald',3),Item.of('minecraft:emerald',1).withChance(0.75),Item.of('minecraft:diamond',1).withChance(0.8),'create:experience_nugget'],'#forge:ores/emerald').processingTime(50);
   event.recipes.create.crushing([Item.of('minecraft:diamond',4),Item.of('minecraft:diamond',2).withChance(0.75),'create:experience_nugget'],'createoreexcavation:raw_diamond').processingTime(50);
   event.recipes.create.crushing([Item.of('minecraft:emerald',4),Item.of('minecraft:emerald',2).withChance(0.75),'create:experience_nugget'],'createoreexcavation:raw_emerald').processingTime(50);
   event.recipes.create.crushing([Item.of('minecraft:redstone',14),Item.of('minecraft:redstone',5).withChance(0.8),'create:experience_nugget'],'createoreexcavation:raw_redstone').processingTime(50);

   event.recipes.create.crushing([Item.of('ad_astra:raw_desh',3),Item.of('ad_astra:raw_desh',1).withChance(0.8),'create:experience_nugget'],'#forge:ores/desh').processingTime(50);
   event.recipes.create.crushing([Item.of('ad_astra:raw_ostrum',3),Item.of('ad_astra:raw_ostrum',1).withChance(0.8),'create:experience_nugget'],'#forge:ores/ostrum').processingTime(50);
   event.recipes.create.crushing([Item.of('ad_astra:raw_calorite',3),Item.of('ad_astra:raw_calorite',1).withChance(0.8),'create:experience_nugget'],'#forge:ores/calorite').processingTime(50);
   event.recipes.create.crushing([Item.of('ad_astra:cheese',5),Item.of('ad_astra:cheese',2).withChance(0.8),'create:experience_nugget'],'#forge:ores/cheese').processingTime(50);
   event.recipes.create.crushing([Item.of('ad_astra:ice_shard',6),Item.of('ad_astra:ice_shard',3).withChance(0.8),'create:experience_nugget'],'#forge:ores/ice_shard').processingTime(50);

   event.recipes.create.crushing([Item.of('tinkers_reforged:raw_titanium',3),Item.of('tinkers_reforged:raw_titanium',1).withChance(0.6),'create:experience_nugget'],'tinkers_reforged:titanium_ore').processingTime(50);

   event.recipes.create.crushing([Item.of('powah:uraninite_raw',5),Item.of('powah:uraninite_raw',3).withChance(0.5),'create:experience_nugget'],'powah:deepslate_uraninite_ore_poor').processingTime(50);
   event.recipes.create.crushing([Item.of('powah:uraninite_raw',5),Item.of('powah:uraninite_raw',3).withChance(0.5),'create:experience_nugget'],'powah:uraninite_ore_poor').processingTime(50);
   event.recipes.create.crushing([Item.of('powah:uraninite_raw',8),Item.of('powah:uraninite_raw',4).withChance(0.6),'create:experience_nugget'],'powah:deepslate_uraninite_ore').processingTime(50);
   event.recipes.create.crushing([Item.of('powah:uraninite_raw',8),Item.of('powah:uraninite_raw',4).withChance(0.6),'create:experience_nugget'],'powah:uraninite_ore').processingTime(50);
   event.recipes.create.crushing([Item.of('powah:uraninite_raw',10),Item.of('powah:uraninite_raw',5).withChance(0.8),'create:experience_nugget'],'powah:deepslate_uraninite_ore_dense').processingTime(50);
   event.recipes.create.crushing([Item.of('powah:uraninite_raw',10),Item.of('powah:uraninite_raw',5).withChance(0.8),'create:experience_nugget'],'powah:uraninite_ore_dense').processingTime(50);

   event.recipes.create.crushing([Item.of('tconstruct:raw_cobalt',3),Item.of('create:crushed_raw_iron',1).withChance(0.6),'create:experience_nugget'],'tconstruct:cobalt_ore').processingTime(50);
   event.recipes.create.crushing([Item.of('tinkers_thinking:raw_ardite',3),Item.of('create:crushed_raw_gold',1).withChance(0.6),'create:experience_nugget'],'tinkers_thinking:ardite_ore').processingTime(50);
   event.recipes.create.crushing([Item.of('kubejs:meteorium_scrap',6),Item.of('create:crushed_raw_gold',3),Item.of('create:crushed_raw_iron',3),Item.of('create:crushed_raw_copper',3),Item.of('create:crushed_raw_uranium',5),Item.of('ae2:certus_quartz_crystal',7).withChance(0.8)],'cti:meteorite_ore').processingTime(300);
   event.recipes.create.crushing([Item.of('kubejs:meteorium_scrap',2),Item.of('create:crushed_raw_nickel',3),Item.of('create:crushed_raw_aluminum',3),Item.of('create:crushed_raw_uranium',5),Item.of('createoreexcavation:raw_diamond',4),Item.of('minecraft:glowstone_dust',6),Item.of('aether_redux:raw_gravitite',5),Item.of('ae2:fluix_crystal',3),Item.of('aether:ambrosium_shard',6)],'kubejs:aetheric_meteorite_ore').processingTime(300);

})