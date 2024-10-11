var APP_DATA = {
  "scenes": [
    {
      "id": "0-estar",
      "name": "ESTAR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.01317530044197035,
        "pitch": 0.015553212732015709,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.0883439503227557,
          "pitch": 0.0690825129217778,
          "rotation": 0,
          "target": "1-cozinha"
        },
        {
          "yaw": 2.2895011285602074,
          "pitch": 0.05721841833521957,
          "rotation": 0,
          "target": "2-lavabo"
        },
        {
          "yaw": 0.3430004843172796,
          "pitch": 0.07138516509496284,
          "rotation": 0,
          "target": "3-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cozinha",
      "name": "COZINHA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.02876472138203745,
        "pitch": 0.004773811378349535,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.1707759410929732,
          "pitch": -0.00015882068047368136,
          "rotation": 0,
          "target": "0-estar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-lavabo",
      "name": "LAVABO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8843581882713174,
          "pitch": 0.5033462822301207,
          "rotation": 0,
          "target": "0-estar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-corredor",
      "name": "CORREDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 2.9343642678865853,
          "pitch": 0.29738902385082966,
          "rotation": 0,
          "target": "0-estar"
        },
        {
          "yaw": 2.377525383262947,
          "pitch": 0.20065604662914183,
          "rotation": 0,
          "target": "4-office"
        },
        {
          "yaw": -0.5752561700633958,
          "pitch": 0.3286009620312669,
          "rotation": 0,
          "target": "5-quarto-sofia"
        },
        {
          "yaw": 0.16718868268677056,
          "pitch": 0.2155595431930415,
          "rotation": 0,
          "target": "7-quarto-casal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-office",
      "name": "OFFICE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.086384301785552,
        "pitch": 0.3980306596396961,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.9042511040590817,
          "pitch": 0.2760820755783975,
          "rotation": 0,
          "target": "3-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-quarto-sofia",
      "name": "QUARTO SOFIA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.761317932554558,
        "pitch": 0.36922670119425405,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.2234375328542253,
          "pitch": 0.2496152762695143,
          "rotation": 0,
          "target": "6-banho-sofia"
        },
        {
          "yaw": 0.8248529790649091,
          "pitch": 0.07264045924572393,
          "rotation": 0,
          "target": "3-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-banho-sofia",
      "name": "BANHO SOFIA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.5644565299503057,
        "pitch": -0.02866712137532801,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 3.0021400947152426,
          "pitch": 0.505752045786874,
          "rotation": 0,
          "target": "5-quarto-sofia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-quarto-casal",
      "name": "QUARTO CASAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.5706011331433327,
        "pitch": 0.10723613639022744,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 2.3241326631666865,
          "pitch": 0.15339306912330564,
          "rotation": 0,
          "target": "8-banho-casal"
        },
        {
          "yaw": 2.978693456972934,
          "pitch": 0.18905766467967666,
          "rotation": 0,
          "target": "3-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-banho-casal",
      "name": "BANHO CASAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.5642461457025023,
        "pitch": 0.08750517725508544,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.8723340075190151,
          "pitch": 0.5626414119717751,
          "rotation": 0,
          "target": "7-quarto-casal"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "PRK - V03",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
