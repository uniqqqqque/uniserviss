export const products = [
  // Videokartes (GPU)
  { 
    id: 1, 
    name: "ASUS TUF RTX 4070 Ti", 
    category: "gpu", 
    brand: "asus", 
    price: 949.00, 
    image: "https://picsum.photos/200/300?random=1",
    description: "Jaudīga videokarte ar 12GB GDDR6X atmiņu. Ideāli piemērota spēlēm 4K izšķirtspējā un profesionālam darbam ar grafiku."
  },
  { 
    id: 2, 
    name: "MSI GeForce RTX 4060 Ti", 
    category: "gpu", 
    brand: "msi", 
    price: 479.99, 
    image: "https://picsum.photos/200/300?random=3",
    description: "Vidējas klases videokarte ar izcilu cenas un veiktspējas attiecību. Lieliski piemērota Full HD un 1440p spēlēšanai."
  },
  { 
    id: 3, 
    name: "Gigabyte Radeon RX 7800 XT", 
    category: "gpu", 
    brand: "gigabyte", 
    price: 599.00, 
    image: "https://picsum.photos/200/300?random=4",
    description: "AMD jaunākā paaudze ar 16GB GDDR6 atmiņu. Izcilas dzesēšanas sistēma un augsta veiktspēja 1440p izšķirtspējā."
  },
  { 
    id: 4, 
    name: "ASUS ROG Strix RTX 4090", 
    category: "gpu", 
    brand: "asus", 
    price: 1899.00, 
    image: "https://picsum.photos/200/300?random=5",
    description: "Labākā patērētāju klases videokarte tirgū. 24GB GDDR6X atmiņa, ideāla 4K spēlēšanai un profesionālam darbam."
  },

  // Procesori (CPU)
  { 
    id: 5, 
    name: "AMD Ryzen 7 7800X3D", 
    category: "cpu", 
    brand: "amd", 
    price: 359.99, 
    image: "https://picsum.photos/200/300?random=2",
    description: "8 kodolu procesoris ar 3D V-Cache tehnoloģiju. Labākais izvēle spēlētājiem ar izcilu veiktspēju spēlēs."
  },
  { 
    id: 6, 
    name: "Intel Core i5-13600K", 
    category: "cpu", 
    brand: "intel", 
    price: 299.00, 
    image: "https://picsum.photos/200/300?random=6",
    description: "14 kodolu procesoris ar hibrīdarhitektūru. Lieliska izvēle gan spēlēm, gan daudzuzdevumu darbam ar izcilu cenas-veiktspējas attiecību."
  },
  { 
    id: 7, 
    name: "AMD Ryzen 9 7950X", 
    category: "cpu", 
    brand: "amd", 
    price: 549.99, 
    image: "https://picsum.photos/200/300?random=7",
    description: "Flagmanis ar 16 kodoliem un 32 pavedienem. Ideāls profesionālam darbam: video montāža, 3D renderēšana un kompleksas simulācijas."
  },
  { 
    id: 8, 
    name: "Intel Core i7-14700K", 
    category: "cpu", 
    brand: "intel", 
    price: 419.00, 
    image: "https://picsum.photos/200/300?random=8",
    description: "Jaunākās 14. paaudzes procesoris ar 20 kodoliem. Augsta veiktspēja gan spēlēs, gan satura veidošanā ar zemu enerģijas patēriņu."
  },

  // Mātesplates (MBR)
  { 
    id: 9, 
    name: "ASUS ROG Strix B650-A", 
    category: "mbr", 
    brand: "asus", 
    price: 249.99, 
    image: "https://picsum.photos/200/300?random=9",
    description: "Mātesplate AMD AM5 platformai ar DDR5 atbalstu. Kvalitātīva VRM sistēma, Wi-Fi 6E un RGB apgaismojums spēlētājiem."
  },
  { 
    id: 10, 
    name: "MSI MAG Z790 Tomahawk", 
    category: "mbr", 
    brand: "msi", 
    price: 289.00, 
    image: "https://picsum.photos/200/300?random=10",
    description: "Intel Z790 čipsets ar atbalstu 13. un 14. paaudzes procesoriem. PCIe 5.0 atbalsts, 4x M.2 sloti un uzlabota audio sistēma."
  },
  { 
    id: 11, 
    name: "Gigabyte B760M DS3H", 
    category: "mbr", 
    brand: "gigabyte", 
    price: 129.99, 
    image: "https://picsum.photos/200/300?random=11",
    description: "Budžeta līmeņa mATX mātesplate Intel platformai. Kompakts izmērs, DDR4 atbalsts un visas nepieciešamās funkcijas ikdienas lietošanai."
  },

  // Operatīvā atmiņa (RAM)
  { 
    id: 12, 
    name: "Corsair Vengeance 32GB DDR5", 
    category: "ram", 
    brand: "corsair", 
    price: 129.99, 
    image: "https://picsum.photos/200/300?random=12",
    description: "DDR5 atmiņa ar 5600MHz frekvenci. 32GB (2x16GB) komplekts ar zemu latenci, ideāli jaunākajām platformām un daudzuzdevumu darbam."
  },
  { 
    id: 13, 
    name: "Kingston Fury Beast 16GB DDR4", 
    category: "ram", 
    brand: "kingston", 
    price: 54.99, 
    image: "https://picsum.photos/200/300?random=13",
    description: "Uzticama DDR4 atmiņa 3200MHz frekvencē. 16GB (2x8GB) komplekts ar mūžīgu garantiju, lieliska izvēle budžeta sistēmām."
  },
  { 
    id: 14, 
    name: "G.Skill Trident Z5 64GB DDR5", 
    category: "ram", 
    brand: "gskill", 
    price: 249.00, 
    image: "https://picsum.photos/200/300?random=14",
    description: "Augstākās klases DDR5 atmiņa ar 6000MHz+ frekvenci un RGB apgaismojumu. 64GB profesionālam darbam ar video un 3D grafikiem."
  },

  // SSD
  { 
    id: 15, 
    name: "Samsung 980 PRO 1TB NVMe", 
    category: "ssd", 
    brand: "samsung", 
    price: 119.99, 
    image: "https://picsum.photos/200/300?random=15",
    description: "Ātrākais PCIe 4.0 NVMe SSD ar līdz 7000MB/s lasīšanas ātrumu. 1TB ietilpība ar 5 gadu garantiju, ideāls operētājsistēmai."
  },
  { 
    id: 16, 
    name: "WD Black SN850X 2TB NVMe", 
    category: "ssd", 
    brand: "western digital", 
    price: 189.00, 
    image: "https://picsum.photos/200/300?random=16",
    description: "Augstas veiktspējas 2TB NVMe disks spēlētājiem. Liela ietilpība mūsdienu spēlēm, konsekventas rakstīšanas/lasīšanas ātrums."
  },
  { 
    id: 17, 
    name: "Crucial P3 Plus 500GB", 
    category: "ssd", 
    brand: "crucial", 
    price: 49.99, 
    image: "https://picsum.photos/200/300?random=17",
    description: "Pieejams PCIe 4.0 SSD ar 500GB ietilpību. Lieliska budžeta izvēle sistēmas diskam ar 5000MB/s+ lasīšanas ātrumu."
  },

  // HDD
  { 
    id: 18, 
    name: "Seagate BarraCuda 2TB", 
    category: "hdd", 
    brand: "seagate", 
    price: 59.99, 
    image: "https://picsum.photos/200/300?random=18",
    description: "Uzticams 2TB cietā diska disks ar 7200RPM ātrumu. Ideāls failu glabāšanai, datu rezerves kopēšanai un multimedijai."
  },
  { 
    id: 19, 
    name: "WD Blue 4TB", 
    category: "hdd", 
    brand: "western digital", 
    price: 89.00, 
    image: "https://picsum.photos/200/300?random=19",
    description: "Lielas ietilpības 4TB HDD ikdienas lietošanai. 5400RPM ekonomisks risinājums lielu failu kolekciju uzglabāšanai."
  },
  { 
    id: 20, 
    name: "Toshiba P300 1TB", 
    category: "hdd", 
    brand: "toshiba", 
    price: 44.99, 
    image: "https://picsum.photos/200/300?random=20",
    description: "Budžeta 1TB disks ar 7200RPM. Piemērots kā papildus disk datu glabāšanai birojs sistemās un mājas datoros."
  },

  // Barošanas bloki (PSU)
  { 
    id: 21, 
    name: "Corsair RM850x 850W 80+ Gold", 
    category: "psu", 
    brand: "corsair", 
    price: 139.99, 
    image: "https://picsum.photos/200/300?random=21",
    description: "850W modulārs PSU ar 80+ Gold sertifikātu. Kluss darbība, pilna kabeļu modulāritāte un 10 gadu garantija augstas klases sistēmām."
  },
  { 
    id: 22, 
    name: "EVGA SuperNOVA 750W 80+ Platinum", 
    category: "psu", 
    brand: "evga", 
    price: 119.00, 
    image: "https://picsum.photos/200/300?random=22",
    description: "750W PSU ar izcilu 92% efektivitāti (80+ Platinum). Pilnigi modulārs dizains un uzticama darbība ar 10 gadu garantiju."
  },
  { 
    id: 23, 
    name: "be quiet! Pure Power 11 600W", 
    category: "psu", 
    brand: "be quiet", 
    price: 79.99, 
    image: "https://picsum.photos/200/300?random=23",
    description: "600W budžeta PSU ar 80+ Gold efektivitāti. Klusa darbība un uzticama kvalitāte vidējas klases sistēmām ar 5 gadu garantiju."
  },

  // Korpusi (Case)
  { 
    id: 24, 
    name: "NZXT H510 Flow Mid Tower", 
    category: "case", 
    brand: "nzxt", 
    price: 89.99, 
    image: "https://picsum.photos/200/300?random=24",
    description: "Modern Mid Tower korpuss ar uzlabotu gaisa plūsmu. Tīra kabelu vadīšana, stikla sānu panelis un vieta līdz 6 ventilatoriem."
  },
  { 
    id: 25, 
    name: "Corsair 4000D Airflow", 
    category: "case", 
    brand: "corsair", 
    price: 104.99, 
    image: "https://picsum.photos/200/300?random=25",
    description: "Populārs ATX korpuss ar izcilu ventilāciju. Tērauda konstrukcija, optimāla gaisa plūsma un vieta līdz 360mm radiātoriem."
  },
  { 
    id: 26, 
    name: "Fractal Design Meshify C", 
    category: "case", 
    brand: "fractal design", 
    price: 99.00, 
    image: "https://picsum.photos/200/300?random=26",
    description: "Kompakts Mid Tower ar agresīvu dizainu. Pilnigs mesh priekšējais panelis maksimālai ventilācijai un modernām komponentēm."
  },

  // Ventilatori (Fan)
  { 
    id: 27, 
    name: "Noctua NF-A12x25 PWM", 
    category: "fan", 
    brand: "noctua", 
    price: 32.99, 
    image: "https://picsum.photos/200/300?random=27",
    description: "Labākais 120mm ventilators tirgū. Izcilas performanča, kluss darbība (22.6 dBA) un 6 gadu garantija ar premīcijas kvalitāti."
  },
  { 
    id: 28, 
    name: "Arctic P12 PWM 5-Pack", 
    category: "fan", 
    brand: "arctic", 
    price: 29.99, 
    image: "https://picsum.photos/200/300?random=28",
    description: "5 gab. 120mm ventilatoru komplekts ar izcilu cenas-kvalitātes attiecību. Labs gaisa spīdiens, PWM kontrole un klusa darbība."
  },
  { 
    id: 29, 
    name: "Corsair iCUE QL120 RGB 3-Pack", 
    category: "fan", 
    brand: "corsair", 
    price: 119.99, 
    image: "https://picsum.photos/200/300?random=29",
    description: "Premium RGB ventilatori ar 34 LED uz katra. Divpusējs apgaismojums, iCUE programmatūras kontrole un labs dzesešanas efekts."
  },

  // Datori (PC)
  { 
    id: 30, 
    name: "Gaming PC Pro - RTX 4070", 
    category: "pc", 
    brand: "custom", 
    price: 1599.00, 
    image: "https://picsum.photos/200/300?random=30",
    description: "Gatavs spēļu dators ar RTX 4070, Ryzen 7 7800X3D, 32GB DDR5 un 1TB NVMe SSD. Ideāls 1440p spēlēšanai ar augstām FPS."
  },
  { 
    id: 31, 
    name: "Office PC Essential", 
    category: "pc", 
    brand: "custom", 
    price: 599.99, 
    image: "https://picsum.photos/200/300?random=31",
    description: "Ekonomisks biroja dators ar Intel Core i3, 16GB DDR4 un 512GB SSD. Piemērots ikdienas uzdevumiem, dārbam ar dokumentiem."
  },
  { 
    id: 32, 
    name: "Workstation Pro - Ryzen 9", 
    category: "pc", 
    brand: "custom", 
    price: 2299.00, 
    image: "https://picsum.photos/200/300?random=32",
    description: "Profesionāla darba stacija ar Ryzen 9 7950X, 64GB DDR5, RTX 4080 un 2TB NVMe. Video montāžai, 3D renderēšanai un simulācijām."
  }
];
