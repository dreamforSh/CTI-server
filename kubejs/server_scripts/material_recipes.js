ServerEvents.recipes(event => {
    function metalMaterial(materialId,fluid,ingot,temp){
        event.custom(
            {
                "type":"tconstruct:melting",
                "ingredient":{
                    "item":ingot
                },
                "temperature": temp,
                "time": 20,
                "result":{
                    "fluid": fluid,
                    "amount": 90
                }
            }
        )
        event.custom(
            {
                "type":"tconstruct:casting_table",
                "cast": { "tag": "tconstruct:casts/multi_use/ingot" },
                "cast_consumed": false,
                "fluid": {
                    "name": fluid,
                    "amount": 90
                },
                "result": ingot,
                "cooling_time": 20
            }
        )
        event.custom(
            {
                "type":"tconstruct:casting_table",
                "cast": { "tag": "tconstruct:casts/single_use/ingot" },
                "cast_consumed": true,
                "fluid": {
                    "name": fluid,
                    "amount": 90
                },
                "result": ingot,
                "cooling_time": 20
            }
        )
        event.custom(
            {
                "type": "tconstruct:material_fluid",
                "fluid": {
                    "name": fluid,
                    "amount": 90
                },
                "temperature": temp,
                "output": materialId
            }
        )
        event.custom(
            {
                "type": "tconstruct:material_melting",
                "temperature": temp,
                "input": materialId,
                "result": {
                    "fluid": fluid,
                    "amount": 90
                }
            }
        )
        event.custom(
            {
                "type": "tconstruct:material",
                "ingredient": {
                    "item": ingot
                },
                "value": 1,
                "needed": 1,
                "material": materialId
            }
        )
    }
    function customMaterial(materialId,fluid,ingot,fluidAmount,fluidPerItem,itemCount,temp){
        event.custom(
            {
                "type":"tconstruct:melting",
                "ingredient":{
                    "item":ingot
                },
                "temperature": temp,
                "time": 20,
                "result":{
                    "fluid": fluid,
                    "amount": fluidPerItem
                }
            }
        )
        event.custom(
            {
                "type":"tconstruct:casting_table",
                "cast": { "tag": "tconstruct:casts/multi_use/ingot" },
                "cast_consumed": false,
                "fluid": {
                    "name": fluid,
                    "amount": fluidPerItem
                },
                "result": ingot,
                "cooling_time": 20
            }
        )
        event.custom(
            {
                "type":"tconstruct:casting_table",
                "cast": { "tag": "tconstruct:casts/single_use/ingot" },
                "cast_consumed": true,
                "fluid": {
                    "name": fluid,
                    "amount": fluidPerItem
                },
                "result": ingot,
                "cooling_time": 20
            }
        )
        event.custom(
            {
                "type": "tconstruct:material_fluid",
                "fluid": {
                    "name": fluid,
                    "amount": fluidAmount
                },
                "temperature": temp,
                "output": materialId
            }
        )
        event.custom(
            {
                "type": "tconstruct:material_melting",
                "temperature": temp,
                "input": materialId,
                "result": {
                    "fluid": fluid,
                    "amount": fluidAmount
                }
            }
        )
        event.custom(
            {
                "type": "tconstruct:material",
                "ingredient": {
                    "item": ingot
                },
                "value": 1,
                "needed": itemCount,
                "material": materialId
            }
        )
    }
    function metalMaterialNoIngotMelt(materialId,fluid,ingot,temp){
        event.custom(
            {
                "type": "tconstruct:material_fluid",
                "fluid": {
                    "name": fluid,
                    "amount": 90
                },
                "temperature": temp,
                "output": materialId
            }
        )
        event.custom(
            {
                "type": "tconstruct:material_melting",
                "temperature": temp,
                "input": materialId,
                "result": {
                    "fluid": fluid,
                    "amount": 90
                }
            }
        )
        event.custom(
            {
                "type": "tconstruct:material",
                "ingredient": {
                    "item": ingot
                },
                "value": 1,
                "needed": 1,
                "material": materialId
            }
        )
    }

    function metalMaterialNoNuggetMelt(materialId,fluid,ingot,temp){
        event.custom(
            {
                "type": "tconstruct:material_fluid",
                "fluid": {
                    "name": fluid,
                    "amount": 10
                },
                "temperature": temp,
                "output": materialId
            }
        )
        event.custom(
            {
                "type": "tconstruct:material_melting",
                "temperature": temp,
                "input": materialId,
                "result": {
                    "fluid": fluid,
                    "amount": 10
                }
            }
        )
        event.custom(
            {
                "type": "tconstruct:material",
                "ingredient": {
                    "item": ingot
                },
                "value": 1,
                "needed": 1,
                "material": materialId
            }
        )
    }
    function craftableMaterial(materialId,ingred_item){
        event.custom(
            {
                "type": "tconstruct:material",
                "ingredient": {
                    "item": ingred_item
                },
                "value": 1,
                "needed": 1,
                "material": materialId
            }
        )
    }

    metalMaterial("kubejs:veridium","kubejs:molten_veridium","aether_redux:veridium_ingot",1500)
    metalMaterial("kubejs:sentrite","kubejs:molten_sentrite","kubejs:sentrite",2000)
    metalMaterial("kubejs:refined_sentrite","kubejs:molten_refined_sentrite","aether_redux:refined_sentrite",2000)
    metalMaterial("kubejs:gravitite","kubejs:molten_gravitite","aether_redux:gravitite_ingot",3000)
    metalMaterial("kubejs:phoenix","kubejs:molten_phoenix","kubejs:phoenix_ingot",3350)
    customMaterial("kubejs:valkyrie","kubejs:molten_valkyrie","kubejs:valkyrie_ingot",900,90,10,3200)
    craftableMaterial("kubejs:life_crystal","kubejs:life_crystal")
    metalMaterialNoNuggetMelt("kubejs:forgotten_metal","tcintegrations:forgotten","undergarden:forgotten_nugget",4950)
    craftableMaterial("kubejs:carbon_plate","kubejs:carbon_plate")
    metalMaterial("kubejs:star_dragon","cti:molten_star_dragon","cti:star_dragon_ingot",9273)
    metalMaterialNoIngotMelt("kubejs:endergobber","tinkerscalibration:moltenendgobber","gobber2:gobber2_ingot_end",1750)
    metalMaterial("tinkers_ingenuity:blue_sky","kubejs:molten_blue_sky","tinkers_ingenuity:blue_sky_ingot",3900)
    craftableMaterial("cti:unipolar_magnet","kubejs:unipolar_magnet_shard")
event.custom({
  "type": "tconstruct:alloy",
  "inputs": [
    {
      "name": "tconstruct:molten_slimesteel",
      "amount": 180
    },
    {
      "name": "kubejs:molten_swet_bronze",
      "amount": 90
    },
    {
      "name": "kubejs:molten_azure_swet",
      "amount": 250
    }
  ],
  "result": {
    "fluid": "kubejs:molten_blue_sky",
    "amount": 360
  },
  "temperature": 3900
})
    metalMaterial("kubejs:swet_bronze","kubejs:molten_swet_bronze","kubejs:swet_bronze_ingot",1800)
event.custom({
  "type": "tconstruct:alloy",
  "inputs": [
    {
      "name": "tinkers_thinking:molten_tinkers_bronze",
      "amount": 270
    },
    {
      "name": "kubejs:molten_veridium",
      "amount": 90
    },
    {
      "name": "kubejs:molten_azure_swet",
      "amount": 250
    },
    {
      "name": "kubejs:molten_gold_swet",
      "amount": 250
    }
  ],
  "result": {
    "fluid": "kubejs:molten_swet_bronze",
    "amount": 360
  },
  "temperature": 1800
})
})