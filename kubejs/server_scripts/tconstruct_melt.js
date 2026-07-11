ServerEvents.recipes(event => {
    //匠魂加的
    let tcon_metals = ['iron', 'gold', 'zinc', 'aluminum', 'osmium', 'uranium', 'tin', 'lead', 'silver', 'nickel', 'cobalt'];
    let tcon_gems = ['emerald', 'diamond', 'quartz'];
    tcon_metals.forEach(m => {
        event.remove({ id: `tconstruct:smeltery/melting/metal/${m}/ore_singular` });
        if(m==="aluminum"||m==="osmium"){
            event.remove({id: `tconstruct:smeltery/melting/metal/${m}/raw`});
            event.remove({id: `tconstruct:smeltery/melting/metal/${m}/raw_block`});
        }
    });
    tcon_gems.forEach(g => event.remove({ id: `tconstruct:smeltery/melting/${g}/ore_singular` }));
    event.remove({ id: 'tconstruct:smeltery/melting/metal/copper/ore_dense' });

    //AD和深园的
    let tci = ['desh', 'ostrum', 'calorite', 'cloggrum', 'froststeel'];
    tci.forEach(m => {
        ['ore_singular', 'raw', 'raw_block'].forEach(type => {
            event.remove({ id: `tcintegrations:smeltery/melting/metal/${m}/${type}` });
        });
    });
    //匠魂校准的
    let james = ['titanium', 'inertwitherium', 'immersedsilver', 'hothium', 'stellarium'];
    james.forEach(m => {
        event.remove({ id: `tinkerscalibration:tools/materials/melting/${m}/ore_singular` });
        event.remove({ id: `tinkerscalibration:tools/materials/melting/${m}/raw` });
    });
    //再锻的
    let reforged = ['kepu', 'titanium'];
    reforged.forEach(m => {
        ['ore_singular', 'raw', 'raw_block', 'block'].forEach(type => {
            event.remove({ id: `tinkers_reforged:smeltery/melting/${m}/${type}` });
        });
    });
    //机械动力的碎矿石
    ['iron', 'gold', 'copper', 'zinc'].forEach(m => {
        event.remove({ id: `tinkers_ingenuity:melting/create/${m}` });
    });

    event.remove({ id: 'tinker_thinking:common/chlorophyte/ore_melting' });
    event.remove({ id: 'tinkers_reforged:smeltery/melting/titanium/ingot' });
    event.remove({ id: 'tinkers_reforged:smeltery/melting/titanium/nugget' });

    //移除黏液泥土的转换
    let slimeDirtMelt=['earth','sky','ichor','ender']
    let crystalMelt=['earth','sky','ender']
    slimeDirtMelt.forEach(m => {
        event.remove({id:`tconstruct:common/slime/${m}/crystal_growing`})

    })
    crystalMelt.forEach(m => {
        event.remove({id:`tconstruct:smeltery/melting/slime/${m}/crystal`})
        event.remove({id:`tconstruct:smeltery/melting/slime/${m}/crystal_block`})
    })

    event.remove({ id:"tinkerscalibration:tools/materials/melting/ichor/crystal_block"});
    event.remove({ id:"tinkerscalibration:tools/materials/melting/ichor/crystal"});

    /**
     *
     * @param inputItem 输入的物品（物品）
     * @param result 结果（流体）
     * @param byproducts 副产品（流体）
     * @param temp 温度
     * @param time 时间
     * @param rate 比率，只能gem/metal，一个2一个1.33倍率
     */
    function addOreMelting(inputItem, result, byproducts, temp, time, rate) {
        let ingredient = inputItem.startsWith('#')
            ? { tag: inputItem.slice(1) }
            : { item: inputItem };

        let byproductList = Array.isArray(byproducts) ? byproducts : [byproducts];

        event.custom({
            type: "tconstruct:ore_melting",
            ingredient: ingredient,
            byproducts: byproductList,
            result: result,
            temperature: temp,
            time: time,
            rate: rate
        });
    }
    //原版的矿物
    addOreMelting('#forge:ores/copper', { fluid: "tconstruct:molten_copper", amount: 540, rate: "metal" }, { fluid: "tconstruct:molten_gold", amount: 90, rate: "gem" }, 800, 300, "metal")
    addOreMelting('#forge:ores/iron', { fluid: "tconstruct:molten_iron", amount: 270 }, { fluid: "tconstruct:molten_nickel", amount: 90, rate: "gem" }, 800, 300, "metal")
    addOreMelting('#forge:ores/gold', { fluid: "tconstruct:molten_gold", amount: 270 }, { fluid: "tconstruct:molten_copper", amount: 90, rate: "gem" }, 800, 300, "metal")
    addOreMelting('#forge:ores/redstone', { fluid: "thermal:redstone", amount: 600 }, { fluid: "thermal:glowstone", amount: 200, rate: "gem" }, 800, 300, "metal")
    addOreMelting('#forge:ores/emerald', { fluid: "tconstruct:molten_emerald", amount: 300 }, { fluid: "tconstruct:molten_diamond", amount: 200, rate: "gem" }, 800, 300, "metal")
    addOreMelting('#forge:ores/diamond', { fluid: "tconstruct:molten_diamond", amount: 300 }, { fluid: "tconstruct:molten_quartz", amount: 200, rate: "gem" }, 800, 300, "metal")
    addOreMelting('#forge:ores/quartz', { fluid: "tconstruct:molten_quartz", amount: 300 }, { fluid: "tconstruct:molten_amethyst", amount: 200, rate: "gem" }, 800, 300, "metal")

    //AD的矿物和深暗之园的
    addOreMelting('#forge:ores/desh', { fluid: "tcintegrations:desh", amount: 270 }, { fluid: "tconstruct:molten_copper", amount: 90, rate: "gem" }, 2500, 300, "metal")
    addOreMelting('ad_astra:raw_desh', { fluid: "tcintegrations:desh", amount: 90 }, { fluid: "tconstruct:molten_copper", amount: 30, rate: "gem" }, 2500, 250, "metal")
    addOreMelting('ad_astra:raw_desh_block', { fluid: "tcintegrations:desh", amount: 810 }, { fluid: "tconstruct:molten_copper", amount: 270, rate: "gem" }, 2500, 600, "metal")
    addOreMelting('#forge:ores/ostrum', { fluid: "tcintegrations:ostrum", amount: 270 }, { fluid: "tconstruct:molten_silver", amount: 90, rate: "gem" }, 2500, 300, "metal")
    addOreMelting('ad_astra:raw_ostrum', { fluid: "tcintegrations:ostrum", amount: 90 }, { fluid: "tconstruct:molten_silver", amount: 30, rate: "gem" }, 2500, 250, "metal")
    addOreMelting('ad_astra:raw_ostrum_block', { fluid: "tcintegrations:ostrum", amount: 810 }, { fluid: "tconstruct:molten_silver", amount: 270, rate: "gem" }, 2500, 600, "metal")
    addOreMelting('#forge:ores/calorite', { fluid: "tcintegrations:calorite", amount: 270 }, { fluid: "tconstruct:molten_gold", amount: 90, rate: "gem" }, 2500, 300, "metal")
    addOreMelting('ad_astra:raw_calorite', { fluid: "tcintegrations:calorite", amount: 90 }, { fluid: "tconstruct:molten_gold", amount: 30, rate: "gem" }, 2500, 250, "metal")
    addOreMelting('ad_astra:raw_calorite_block', { fluid: "tcintegrations:calorite", amount: 810 }, { fluid: "tconstruct:molten_gold", amount: 270, rate: "gem" }, 2500, 600, "metal")
    addOreMelting('#forge:ores/cloggrum', { fluid: "tcintegrations:cloggrum", amount: 270 }, { fluid: 'kubejs:fluid_petrotheum', amount: 375, rate: "gem" }, 2500, 280, "metal")
    addOreMelting('undergarden:raw_cloggrum', { fluid: "tcintegrations:cloggrum", amount: 90 }, { fluid: 'kubejs:fluid_petrotheum', amount: 125, rate: "gem" }, 2500, 280, "metal")
    addOreMelting('undergarden:raw_cloggrum_block', { fluid: "tcintegrations:cloggrum", amount: 810 }, { fluid: 'kubejs:fluid_petrotheum', amount: 1125, rate: "gem" }, 2500, 800, "metal")
    addOreMelting('#forge:ores/froststeel', { fluid: "tcintegrations:froststeel", amount: 270 }, { fluid: 'kubejs:fluid_cryotheum', amount: 375, rate: "gem" }, 5000, 280, "metal")
    addOreMelting('undergarden:raw_froststeel', { fluid: "tcintegrations:froststeel", amount: 90 }, { fluid: 'kubejs:fluid_cryotheum', amount: 125, rate: "gem" }, 5000, 280, "metal")
    addOreMelting('undergarden:raw_froststeel_block', { fluid: "tcintegrations:froststeel", amount: 810 }, { fluid: 'kubejs:fluid_cryotheum', amount: 1125, rate: "gem" }, 5000, 800, "metal")
    addOreMelting('#forge:ores/ice_shard', { fluid: "ad_astra:cryo_fuel", amount: 750 }, { fluid: 'kubejs:fluid_cryotheum', amount: 250, rate: "gem" }, 3000, 300, "metal")

    //机械动力,热力,mek和沉浸的矿物
    addOreMelting('#forge:ores/zinc', { fluid: "tconstruct:molten_zinc", amount: 270 }, { fluid: "tconstruct:molten_tin", amount: 90, rate: "gem" }, 800, 300, "metal")
    addOreMelting('#forge:ores/tin', { fluid: "tconstruct:molten_tin", amount: 270 }, { fluid: "tconstruct:molten_copper", amount: 90, rate: "gem" }, 800, 300, "metal")
    addOreMelting('#forge:ores/lead', { fluid: "tconstruct:molten_lead", amount: 270 }, { fluid: "tconstruct:molten_silver", amount: 90, rate: "gem" }, 800, 300, "metal")
    addOreMelting('#forge:ores/silver', { fluid: "tconstruct:molten_silver", amount: 270 }, { fluid: "tconstruct:molten_lead", amount: 90, rate: "gem" }, 800, 300, "metal")
    addOreMelting('#forge:ores/uranium', { fluid: "tconstruct:molten_uranium", amount: 270 }, { fluid: "tconstruct:molten_lead", amount: 90, rate: "gem" }, 800, 300, "metal")
    addOreMelting('#forge:ores/nickel', { fluid: "tconstruct:molten_nickel", amount: 270 }, { fluid: "tconstruct:molten_nickel", amount: 90, rate: "gem" }, 800, 300, "metal")
    addOreMelting('#forge:ores/aluminum', { fluid: "tconstruct:molten_aluminum", amount: 270 }, { fluid: "tconstruct:molten_zinc", amount: 90, rate: "gem" }, 800, 300, "metal")
    addOreMelting('#forge:raw_materials/aluminum', { fluid: "tconstruct:molten_aluminum", amount: 90 }, { fluid: "tconstruct:molten_zinc", amount: 30, rate: "gem" }, 800, 250, "metal")
    addOreMelting('#forge:storage_blocks/raw_aluminum', { fluid: "tconstruct:molten_aluminum", amount: 810 }, { fluid: "tconstruct:molten_zinc", amount: 270, rate: "gem" }, 800, 600, "metal")
    addOreMelting('#forge:ores/osmium', { fluid: "tconstruct:molten_osmium", amount: 270 }, { fluid: "tconstruct:molten_silver", amount: 90, rate: "gem" }, 1100, 300, "metal")
    addOreMelting('#forge:raw_materials/osmium', { fluid: "tconstruct:molten_osmium", amount: 90 }, { fluid: "tconstruct:molten_silver", amount: 30, rate: "gem" }, 1100, 250, "metal")
    addOreMelting('#forge:storage_blocks/raw_osmium', { fluid: "tconstruct:molten_osmium", amount: 810 }, { fluid: "tconstruct:molten_silver", amount: 270, rate: "gem" }, 1100, 600, "metal")
    //匠魂校准的
    addOreMelting('#forge:ores/titanium', { fluid: "tinkerscalibration:moltentitanium", amount: 270 }, { fluid: "tconstruct:molten_iron", amount: 90, rate: "gem" }, 1100, 300, "metal")
    addOreMelting('tinkerscalibration:raw_titanium', { fluid: "tinkerscalibration:moltentitanium", amount: 90 }, { fluid: "tconstruct:molten_iron", amount: 30, rate: "gem" }, 1100, 300, "metal")
    addOreMelting('tinkerscalibration:inert_witherium_ore', { fluid: "tinkerscalibration:molteninertwitherium", amount: 270 }, { fluid: "tinkersinnovation:molten_decline", amount: 90, rate: "gem" }, 1500, 300, "metal")
    addOreMelting('tinkerscalibration:raw_inert_witherium', { fluid: "tinkerscalibration:molteninertwitherium", amount: 90 }, { fluid: "tinkersinnovation:molten_decline", amount: 30, rate: "gem" }, 1500, 250, "metal")
    addOreMelting('#forge:ores/immersed_silver', { fluid: "tinkerscalibration:moltenimmersedsilver", amount: 270 }, { fluid: "tinkerscalibration:moltenhothium", amount: 90, rate: "gem" }, 1500, 300, "metal")
    addOreMelting('tinkerscalibration:raw_immersed_silver', { fluid: "tinkerscalibration:moltenimmersedsilver", amount: 90 }, { fluid: "tinkerscalibration:moltenhothium", amount: 30, rate: "gem" }, 1500, 250, "metal")
    addOreMelting('#forge:ores/hothium', { fluid: "tinkerscalibration:moltenhothium", amount: 270 }, { fluid: "tinkerscalibration:moltenimmersedsilver", amount: 90, rate: "gem" }, 1500, 300, "metal")
    addOreMelting('tinkerscalibration:raw_hothium', { fluid: "tinkerscalibration:moltenhothium", amount: 90 }, { fluid: "tinkerscalibration:moltenimmersedsilver", amount: 30, rate: "gem" }, 1500, 250, "metal")
    addOreMelting('#forge:ores/stellarium', { fluid: "tinkerscalibration:moltenstellarium", amount: 270 }, { fluid: 'kubejs:fluid_pyrotheum', amount: 375, rate: "gem" }, 1500, 300, "metal")
    addOreMelting('tinkerscalibration:raw_stellarium', { fluid: "tinkerscalibration:moltenstellarium", amount: 90 }, { fluid: 'kubejs:fluid_pyrotheum', amount: 125, rate: "gem" }, 1500, 250, "metal")
    addOreMelting('#forge:ores/magiga', { fluid: "tinkerscalibration:moltenmagiga", amount: 270 }, { fluid: "tinkerscalibration:moltensteamium", amount: 90, rate: "gem" }, 1500, 300, "metal")
    addOreMelting('#forge:ores/tonium', { fluid: "tinkerscalibration:moltentonium", amount: 270 }, { fluid: "tinkerscalibration:moltenhalleium", amount: 90, rate: "gem" }, 1500, 300, "metal")
    //工匠再锻的
    addOreMelting('#forge:ores/kepu', { fluid: "tinkers_reforged:kepu", amount: 270 }, { fluid: "tinkers_reforged:titanium", amount: 90, rate: "gem" }, 2000, 300, "metal")
    addOreMelting('#forge:raw_materials/kepu', { fluid: "tinkers_reforged:kepu", amount: 90 }, { fluid: "tinkers_reforged:titanium", amount: 30, rate: "gem" }, 2000, 250, "metal")
    addOreMelting('#forge:storage_blocks/raw_kepu', { fluid: "tinkers_reforged:kepu", amount: 810 }, { fluid: "tinkers_reforged:titanium", amount: 270, rate: "gem" }, 2000, 600, "metal")
    addOreMelting('#forge:ores/zirconium', { fluid: "tinkers_reforged:titanium", amount: 270 }, { fluid: "tinkers_reforged:kepu", amount: 90, rate: "gem" }, 2500, 300, "metal")
    addOreMelting('#forge:raw_materials/zirconium', { fluid: "tinkers_reforged:titanium", amount: 90 }, { fluid: "tinkers_reforged:kepu", amount: 30, rate: "gem" }, 2500, 250, "metal")
    addOreMelting('#forge:storage_blocks/raw_zirconium', { fluid: "tinkers_reforged:titanium", amount: 810 }, { fluid: "tinkers_reforged:kepu", amount: 270, rate: "gem" }, 2500, 600, "metal")
    //匠魂本体的
    addOreMelting('#forge:ores/cobalt', { fluid: "tconstruct:molten_cobalt", amount: 540}, { fluid: "tconstruct:molten_iron", amount: 90, rate: "gem" }, 1000, 300, "metal")
    //机械动力的碎矿石
    addOreMelting('create:crushed_raw_iron', { fluid: "tconstruct:molten_iron", amount: 180 }, { fluid: "tconstruct:molten_nickel", amount: 90, rate: "gem" }, 800, 200, "metal")
    addOreMelting('create:crushed_raw_gold', { fluid: "tconstruct:molten_gold", amount: 180 }, { fluid: "tconstruct:molten_copper", amount: 90, rate: "gem" }, 800, 200, "metal")
    addOreMelting('create:crushed_raw_copper', { fluid: "tconstruct:molten_copper", amount: 180 }, { fluid: "tconstruct:molten_gold", amount: 90, rate: "gem" }, 800, 200, "metal")
    addOreMelting('create:crushed_raw_zinc', { fluid: "tconstruct:molten_zinc", amount: 180 }, { fluid: "tconstruct:molten_tin", amount: 90, rate: "gem" }, 800, 200, "metal")
    addOreMelting('create:crushed_raw_osmium', { fluid: "tconstruct:molten_osmium", amount: 180 }, { fluid: "tconstruct:molten_silver", amount: 90, rate: "gem" }, 1500, 200, "metal")
    addOreMelting('create:crushed_raw_silver', { fluid: "tconstruct:molten_silver", amount: 180 }, { fluid: "tconstruct:molten_lead", amount: 90, rate: "gem" }, 800, 200, "metal")
    addOreMelting('create:crushed_raw_tin', { fluid: "tconstruct:molten_tin", amount: 180 }, { fluid: "tconstruct:molten_copper", amount: 90, rate: "gem" }, 800, 200, "metal")
    addOreMelting('create:crushed_raw_lead', { fluid: "tconstruct:molten_lead", amount: 180 }, { fluid: "tconstruct:molten_silver", amount: 90, rate: "gem" }, 800, 200, "metal")
    addOreMelting('create:crushed_raw_aluminum', { fluid: "tconstruct:molten_aluminum", amount: 180 }, { fluid: "tconstruct:molten_zinc", amount: 90, rate: "gem" }, 800, 200, "metal")
    addOreMelting('create:crushed_raw_nickel', { fluid: "tconstruct:molten_nickel", amount: 180 }, { fluid: "tconstruct:molten_iron", amount: 90, rate: "gem" }, 800, 200, "metal")
    addOreMelting('create:crushed_raw_uranium', { fluid: "tconstruct:molten_uranium", amount: 180 }, { fluid: "tconstruct:molten_lead", amount: 90, rate: "gem" }, 800, 200, "metal")
    //三态络合物
    addOreMelting('kubejs:crystal_redstone',{fluid:"thermal:redstone",amount:900},{fluid:"tconstruct:molten_quartz",amount:100,rate:"gem"}, 1800, 300, "gem")
    addOreMelting('kubejs:crystal_ender',{fluid: "thermal:ender",amount:1000},{fluid:"tconstruct:molten_quartz",amount:100,rate:"gem"}, 1800, 300, "gem")
    addOreMelting('kubejs:crystal_glowstone',{fluid: "thermal:glowstone",amount:400},{fluid:"tconstruct:molten_quartz",amount:100,rate:"gem"}, 1800, 300, "gem")
    //coe的矿物
    addOreMelting('createoreexcavation:raw_redstone',{fluid:"thermal:redstone",amount:900},{fluid:"thermal:glowstone",amount:300,rate:"gem"}, 1800, 300, "metal")
    addOreMelting('createoreexcavation:raw_diamond',{fluid:"tconstruct:molten_diamond",amount:300},{fluid:"tconstruct:molten_emerald",amount:100,rate:"gem"}, 1200, 300, "metal")
    addOreMelting('createoreexcavation:raw_emerald',{fluid:"tconstruct:molten_emerald",amount:300},{fluid:"tconstruct:molten_diamond",amount:100,rate:"gem"}, 1200, 300, "metal")
    //水晶和水晶块
    addOreMelting('tconstruct:earth_slime_crystal',{fluid:"tconstruct:earth_slime",amount:250},{fluid:"tconstruct:molten_clay",amount:125,rate:"gem"}, 100, 140, "gem")
    addOreMelting('tconstruct:earth_slime_crystal_block',{fluid:"tconstruct:earth_slime",amount:1000},{fluid:"tconstruct:molten_clay",amount:500,rate:"gem"}, 100, 500, "gem")
    addOreMelting('tconstruct:sky_slime_crystal',{fluid:"tconstruct:sky_slime",amount:250},{fluid:"tconstruct:powdered_snow",amount:250,rate:"gem"}, 10, 140, "gem")
    addOreMelting('tconstruct:sky_slime_crystal_block',{fluid:"tconstruct:sky_slime",amount:1000},{fluid:"tconstruct:powdered_snow",amount:1000,rate:"gem"}, 10, 500, "gem")
    addOreMelting('tconstruct:ender_slime_crystal',{fluid:"tconstruct:ender_slime",amount:250},{fluid:"tconstruct:molten_ender",amount:125,rate:"gem"}, 1500, 140, "gem")
    addOreMelting('tconstruct:ender_slime_crystal_block',{fluid:"tconstruct:ender_slime",amount:1000},{fluid:"tconstruct:molten_ender",amount:500,rate:"gem"}, 1500, 400, "gem")
    addOreMelting('tconstruct:ichor_slime_crystal',{fluid:"tinkerscalibration:moltenichor",amount:250},{fluid:"tconstruct:blazing_blood",amount:250,rate:"gem"}, 1000, 140, "gem")
    addOreMelting('tconstruct:ichor_slime_crystal_block',{fluid:"tinkerscalibration:moltenichor",amount:1000},{fluid:"tconstruct:blazing_blood",amount:1000,rate:"gem"}, 1000, 400, "gem")
})