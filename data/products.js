export function dopasujProdukt(idProduktu) {
  let pasujacyProdukt;

  produkty.forEach((produkt) => {
    if (produkt.id === idProduktu) {
      pasujacyProdukt = produkt;
    }
  });
  return pasujacyProdukt;
}

export const produkty = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    obrazek: "obrazy/products/athletic-cotton-socks-6-pairs.jpg",
    nazwa: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    ocena: {
      gwiazdki: 4.5,
      licznik: 87,
    },
    cenaGrosze: 1090,
    slowaKluczowe: ["socks", "sports", "apparel"],
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    obrazek: "obrazy/products/intermediate-composite-basketball.jpg",
    nazwa: "Intermediate Size Basketball",
    ocena: {
      gwiazdki: 4,
      licznik: 127,
    },
    cenaGrosze: 2099,
    slowaKluczowe: ["sports", "basketballs"],
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    obrazek: "obrazy/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    nazwa: "Adults Plain Cotton T-Shirt - 2 Pack",
    ocena: {
      gwiazdki: 4.5,
      licznik: 56,
    },
    cenaGrosze: 799,
    slowaKluczowe: ["tshirts", "apparel", "mens"],
    type: "clothing",
    sizeChartLink: "obrazy/clothing-size-chart.png",
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    obrazek: "obrazy/products/black-2-slot-toaster.jpg",
    nazwa: "2 Slot Toaster - Black",
    ocena: {
      gwiazdki: 5,
      licznik: 2197,
    },
    cenaGrosze: 1899,
    slowaKluczowe: ["toaster", "kitchen", "appliances"],
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    obrazek: "obrazy/products/6-piece-white-dinner-plate-set.jpg",
    nazwa: "6 Piece White Dinner Plate Set",
    ocena: {
      gwiazdki: 4,
      licznik: 37,
    },
    cenaGrosze: 2067,
    slowaKluczowe: ["plates", "kitchen", "dining"],
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    obrazek: "obrazy/products/6-piece-non-stick-baking-set.webp",
    nazwa: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    ocena: {
      gwiazdki: 4.5,
      licznik: 175,
    },
    cenaGrosze: 3499,
    slowaKluczowe: ["kitchen", "cookware"],
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    obrazek: "obrazy/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    nazwa: "Plain Hooded Fleece Sweatshirt",
    ocena: {
      gwiazdki: 4.5,
      licznik: 317,
    },
    cenaGrosze: 2400,
    slowaKluczowe: ["hoodies", "sweaters", "apparel"],
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    obrazek: "obrazy/products/luxury-tower-set-6-piece.jpg",
    nazwa: "Luxury Towel Set - Graphite Gray",
    ocena: {
      gwiazdki: 4.5,
      licznik: 144,
    },
    cenaGrosze: 3599,
    slowaKluczowe: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels",
    ],
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    obrazek: "obrazy/products/liquid-laundry-detergent-plain.jpg",
    nazwa: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    ocena: {
      gwiazdki: 4.5,
      licznik: 305,
    },
    cenaGrosze: 2899,
    slowaKluczowe: ["bathroom", "cleaning"],
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    obrazek: "obrazy/products/knit-athletic-sneakers-gray.jpg",
    nazwa: "Waterproof Knit Athletic Sneakers - Gray",
    ocena: {
      gwiazdki: 4,
      licznik: 89,
    },
    cenaGrosze: 3390,
    slowaKluczowe: ["shoes", "running shoes", "footwear"],
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    obrazek: "obrazy/products/women-chiffon-beachwear-coverup-black.jpg",
    nazwa: "Women's Chiffon Beachwear Cover Up - Black",
    ocena: {
      gwiazdki: 4.5,
      licznik: 235,
    },
    cenaGrosze: 2070,
    slowaKluczowe: ["robe", "swimsuit", "swimming", "bathing", "apparel"],
    type: "clothing",
    sizeChartLink: "obrazy/clothing-size-chart.png",
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    obrazek: "obrazy/products/round-sunglasses-black.jpg",
    nazwa: "Round Sunglasses",
    ocena: {
      gwiazdki: 4.5,
      licznik: 30,
    },
    cenaGrosze: 1560,
    slowaKluczowe: ["accessories", "shades"],
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    obrazek: "obrazy/products/women-beach-sandals.jpg",
    nazwa: "Women's Two Strap Buckle Sandals - Tan",
    ocena: {
      gwiazdki: 4.5,
      licznik: 562,
    },
    cenaGrosze: 2499,
    slowaKluczowe: ["footwear", "sandals", "womens", "beach", "summer"],
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    obrazek: "obrazy/products/blackout-curtain-set-beige.webp",
    nazwa: "Blackout Curtains Set 4-Pack - Beige",
    ocena: {
      gwiazdki: 4.5,
      licznik: 232,
    },
    cenaGrosze: 4599,
    slowaKluczowe: ["bedroom", "curtains", "home"],
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    obrazek: "obrazy/products/men-slim-fit-summer-shorts-gray.jpg",
    nazwa: "Men's Slim-Fit Summer Shorts",
    ocena: {
      gwiazdki: 4,
      licznik: 160,
    },
    cenaGrosze: 1699,
    slowaKluczowe: ["shorts", "apparel", "mens"],
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    obrazek: "obrazy/products/electric-glass-and-steel-hot-water-kettle.webp",
    nazwa: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    ocena: {
      gwiazdki: 5,
      licznik: 846,
    },
    cenaGrosze: 3074,
    slowaKluczowe: ["water boiler", "appliances", "kitchen"],
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    obrazek: "obrazy/products/facial-tissue-2-ply-18-boxes.jpg",
    nazwa: "Ultra Soft Tissue 2-Ply - 18 Box",
    ocena: {
      gwiazdki: 4,
      licznik: 99,
    },
    cenaGrosze: 2374,
    slowaKluczowe: ["kleenex", "tissues", "kitchen", "tissues box", "napkins"],
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    obrazek: "obrazy/products/straw-sunhat.webp",
    nazwa: "Straw Lifeguard Sun Hat",
    ocena: {
      gwiazdki: 4,
      licznik: 215,
    },
    cenaGrosze: 2200,
    slowaKluczowe: ["hats", "straw hats", "summer", "apparel"],
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    obrazek: "obrazy/products/sky-flower-stud-earrings.webp",
    nazwa: "Sterling Silver Sky Flower Stud Earrings",
    ocena: {
      gwiazdki: 4.5,
      licznik: 52,
    },
    cenaGrosze: 1799,
    slowaKluczowe: ["jewelry", "accessories", "womens"],
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    obrazek: "obrazy/products/women-stretch-popover-hoodie-black.jpg",
    nazwa: "Women's Stretch Popover Hoodie",
    ocena: {
      gwiazdki: 4.5,
      licznik: 2465,
    },
    cenaGrosze: 1374,
    slowaKluczowe: ["hooded", "hoodies", "sweaters", "womens", "apparel"],
    type: "clothing",
    sizeChartLink: "obrazy/clothing-size-chart.png",
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    obrazek: "obrazy/products/bathroom-rug.jpg",
    nazwa: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    ocena: {
      gwiazdki: 4.5,
      licznik: 119,
    },
    cenaGrosze: 1250,
    slowaKluczowe: ["bathmat", "bathroom", "home"],
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    obrazek: "obrazy/products/women-knit-ballet-flat-black.jpg",
    nazwa: "Women's Knit Ballet Flat",
    ocena: {
      gwiazdki: 4,
      licznik: 326,
    },
    cenaGrosze: 2640,
    slowaKluczowe: ["shoes", "flats", "womens", "footwear"],
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    obrazek: "obrazy/products/men-golf-polo-t-shirt-blue.jpg",
    nazwa: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    ocena: {
      gwiazdki: 4.5,
      licznik: 2556,
    },
    cenaGrosze: 1599,
    slowaKluczowe: ["tshirts", "shirts", "apparel", "mens"],
    type: "clothing",
    sizeChartLink: "obrazy/clothing-size-chart.png",
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    obrazek: "obrazy/products/trash-can-with-foot-pedal-50-liter.jpg",
    nazwa: "Trash Can with Foot Pedal - Brushed Stainless Steel",
    ocena: {
      gwiazdki: 4.5,
      licznik: 2286,
    },
    cenaGrosze: 8300,
    slowaKluczowe: ["garbage", "bins", "cans", "kitchen"],
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    obrazek: "obrazy/products/duvet-cover-set-blue-twin.jpg",
    nazwa: "Duvet Cover Set with Zipper Closure",
    ocena: {
      gwiazdki: 4,
      licznik: 456,
    },
    cenaGrosze: 2399,
    slowaKluczowe: ["bedroom", "bed sheets", "sheets", "covers", "home"],
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    obrazek: "obrazy/products/women-chunky-beanie-gray.webp",
    nazwa: "Women's Chunky Cable Beanie - Gray",
    ocena: {
      gwiazdki: 5,
      licznik: 83,
    },
    cenaGrosze: 1250,
    slowaKluczowe: [
      "hats",
      "winter hats",
      "beanies",
      "tuques",
      "apparel",
      "womens",
    ],
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    obrazek: "obrazy/products/men-chino-pants-beige.jpg",
    nazwa: "Men's Classic-fit Pleated Chino Pants",
    ocena: {
      gwiazdki: 4.5,
      licznik: 9017,
    },
    cenaGrosze: 2290,
    slowaKluczowe: ["pants", "apparel", "mens"],
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    obrazek: "obrazy/products/men-athletic-shoes-green.jpg",
    nazwa: "Men's Athletic Sneaker",
    ocena: {
      gwiazdki: 4,
      licznik: 229,
    },
    cenaGrosze: 3890,
    slowaKluczowe: ["shoes", "running shoes", "footwear", "mens"],
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    obrazek: "obrazy/products/men-navigator-sunglasses-brown.jpg",
    nazwa: "Men's Navigator Sunglasses Pilot",
    ocena: {
      gwiazdki: 3.5,
      licznik: 42,
    },
    cenaGrosze: 1690,
    slowaKluczowe: ["sunglasses", "glasses", "accessories", "shades"],
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    obrazek: "obrazy/products/non-stick-cooking-set-15-pieces.webp",
    nazwa: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
    ocena: {
      gwiazdki: 4.5,
      licznik: 511,
    },
    cenaGrosze: 6797,
    slowaKluczowe: ["cooking set", "kitchen"],
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    obrazek: "obrazy/products/vanity-mirror-silver.jpg",
    nazwa: "Vanity Mirror with Heavy Base - Chrome",
    ocena: {
      gwiazdki: 4.5,
      licznik: 130,
    },
    cenaGrosze: 1649,
    slowaKluczowe: ["bathroom", "washroom", "mirrors", "home"],
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    obrazek: "obrazy/products/women-french-terry-fleece-jogger-camo.jpg",
    nazwa: "Women's Fleece Jogger Sweatpant",
    ocena: {
      gwiazdki: 4.5,
      licznik: 248,
    },
    cenaGrosze: 2400,
    slowaKluczowe: ["pants", "sweatpants", "jogging", "apparel", "womens"],
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    obrazek: "obrazy/products/double-elongated-twist-french-wire-earrings.webp",
    nazwa: "Double Oval Twist French Wire Earrings - Gold",
    ocena: {
      gwiazdki: 4.5,
      licznik: 117,
    },
    cenaGrosze: 2400,
    slowaKluczowe: ["accessories", "womens"],
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    obrazek: "obrazy/products/round-airtight-food-storage-containers.jpg",
    nazwa: "Round Airtight Food Storage Containers - 5 Piece",
    ocena: {
      gwiazdki: 4,
      licznik: 126,
    },
    cenaGrosze: 2899,
    slowaKluczowe: ["boxes", "food containers", "kitchen"],
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    obrazek: "obrazy/products/coffeemaker-with-glass-carafe-black.jpg",
    nazwa: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
    ocena: {
      gwiazdki: 4.5,
      licznik: 1211,
    },
    cenaGrosze: 2250,
    slowaKluczowe: ["coffeemakers", "kitchen", "appliances"],
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    obrazek: "obrazy/products/blackout-curtains-black.jpg",
    nazwa: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
    ocena: {
      gwiazdki: 4.5,
      licznik: 363,
    },
    cenaGrosze: 3099,
    slowaKluczowe: ["bedroom", "home"],
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    obrazek: "obrazy/products/cotton-bath-towels-teal.webp",
    nazwa: "100% Cotton Bath Towels - 2 Pack, Light Teal",
    ocena: {
      gwiazdki: 4.5,
      licznik: 93,
    },
    cenaGrosze: 2110,
    slowaKluczowe: ["bathroom", "home", "towels"],
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    obrazek: "obrazy/products/knit-athletic-sneakers-pink.webp",
    nazwa: "Waterproof Knit Athletic Sneakers - Pink",
    ocena: {
      gwiazdki: 4,
      licznik: 89,
    },
    cenaGrosze: 3390,
    slowaKluczowe: ["shoes", "running shoes", "footwear", "womens"],
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    obrazek: "obrazy/products/licznikertop-blender-64-oz.jpg",
    nazwa: "licznikertop Blender - 64oz, 1400 Watts",
    ocena: {
      gwiazdki: 4,
      licznik: 3,
    },
    cenaGrosze: 10747,
    slowaKluczowe: ["food blenders", "kitchen", "appliances"],
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    obrazek: "obrazy/products/floral-mixing-bowl-set.jpg",
    nazwa: "10-Piece Mixing Bowl Set with Lids - Floral",
    ocena: {
      gwiazdki: 5,
      licznik: 679,
    },
    cenaGrosze: 3899,
    slowaKluczowe: ["mixing bowls", "baking", "cookware", "kitchen"],
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    obrazek: "obrazy/products/kitchen-paper-towels-30-pack.jpg",
    nazwa: "2-Ply Kitchen Paper Towels - 30 Pack",
    ocena: {
      gwiazdki: 4.5,
      licznik: 1045,
    },
    cenaGrosze: 5799,
    slowaKluczowe: ["kitchen", "kitchen towels", "tissues"],
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    obrazek: "obrazy/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    nazwa: "Men's Full-Zip Hooded Fleece Sweatshirt",
    ocena: {
      gwiazdki: 4.5,
      licznik: 3157,
    },
    cenaGrosze: 2400,
    slowaKluczowe: ["sweaters", "hoodies", "apparel", "mens"],
  },
];
