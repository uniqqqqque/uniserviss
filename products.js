export const products = [
  // Videokartes (GPU)
  { 
    id: 1, 
    name: "ASUS TUF RTX 4070 Ti", 
    category: "gpu", 
    brand: "asus", 
    price: 949.00, 
    image: "images/ASUS_TUF_RTX_4070_Ti.jpg",
    description: "Jaudīga videokarte ar 12GB GDDR6X atmiņu. Ideāli piemērota spēlēm 4K izšķirtspējā un profesionālam darbam ar grafiku."
  },
  { 
    id: 2, 
    name: "GIGABYTE RTX 4060 GAMING OC", 
    category: "gpu", 
    brand: "gigabyte", 
    price: 479.99, 
    image: "images/GIGABYTE_RTX_4060.jpg",
    description: "Vidējas klases videokarte ar izcilu cenas un veiktspējas attiecību. Lieliski piemērota Full HD un 1440p spēlēšanai."
  },
  { 
    id: 3, 
    name: "Gigabyte Radeon RX 7800 XT GAMING OC", 
    category: "gpu", 
    brand: "gigabyte", 
    price: 599.00, 
    image: "images/Gigabyte_Radeon_RX_7800.jpg",
    description: "AMD jaunākā paaudze ar 16GB GDDR6 atmiņu. Izcilas dzesēšanas sistēma un augsta veiktspēja 1440p izšķirtspējā."
  },
  { 
    id: 4, 
    name: "ASUS ROG Strix RTX 4090 GAMING OC", 
    category: "gpu", 
    brand: "asus", 
    price: 1899.00, 
    image: "images/ASUS_ROG_Strix_RTX_4090.jpg",
    description: "Labākā patērētāju klases videokarte tirgū. 24GB GDDR6X atmiņa, ideāla 4K spēlēšanai un profesionālam darbam."
  },

  // Procesori (CPU)
  { 
    id: 5, 
    name: "AMD Ryzen 7 7800X3D", 
    category: "cpu", 
    brand: "amd", 
    price: 359.99, 
    image: "images/AMD_Ryzen_7_7800X3D.jpg",
    description: "8 kodolu procesoris ar 3D V-Cache tehnoloģiju. Labākais izvēle spēlētājiem ar izcilu veiktspēju spēlēs."
  },
  { 
    id: 6, 
    name: "Intel Core i5-13600K", 
    category: "cpu", 
    brand: "intel", 
    price: 299.00, 
    image: "images/Intel_Core_i5_13600K.jpg",
    description: "14 kodolu procesoris ar hibrīdarhitektūru. Lieliska izvēle gan spēlēm, gan daudzuzdevumu darbam ar izcilu cenas-veiktspējas attiecību."
  },
  { 
    id: 7, 
    name: "AMD Ryzen 9 7950X", 
    category: "cpu", 
    brand: "amd", 
    price: 549.99, 
    image: "images/AMD_Ryzen_9_7950X.jpg",
    description: "Flagmanis ar 16 kodoliem un 32 pavedienem. Ideāls profesionālam darbam: video montāža, 3D renderēšana un kompleksas simulācijas."
  },
  { 
    id: 8, 
    name: "Intel Core i7-14700K", 
    category: "cpu", 
    brand: "intel", 
    price: 419.00, 
    image: "images/Intel_Core_i7_14700K.jpg",
    description: "Jaunākās 14. paaudzes procesoris ar 20 kodoliem. Augsta veiktspēja gan spēlēs, gan satura veidošanā ar zemu enerģijas patēriņu."
  },

  // Mātesplates (MBR)
  { 
    id: 9, 
    name: "ASUS ROG Strix B650-A", 
    category: "mbr", 
    brand: "asus", 
    price: 249.99, 
    image: "images/ASUS_ROG_Strix_B650_A.jpg",
    description: "Mātesplate AMD AM5 platformai ar DDR5 atbalstu. Kvalitātīva VRM sistēma, Wi-Fi 6E un RGB apgaismojums spēlētājiem."
  },
  { 
    id: 10, 
    name: "MSI MAG Z790 Tomahawk", 
    category: "mbr", 
    brand: "msi", 
    price: 289.00, 
    image: "images/MSI_MAG_Z790_Tomahawk.png",
    description: "Intel Z790 čipsets ar atbalstu 13. un 14. paaudzes procesoriem. PCIe 5.0 atbalsts, 4x M.2 sloti un uzlabota audio sistēma."
  },
  { 
    id: 11, 
    name: "Gigabyte B760M DS3H", 
    category: "mbr", 
    brand: "gigabyte", 
    price: 129.99, 
    image: "images/Gigabyte_B760M_DS3H.png",
    description: "Budžeta līmeņa mATX mātesplate Intel platformai. Kompakts izmērs, DDR4 atbalsts un visas nepieciešamās funkcijas ikdienas lietošanai."
  },

  // Operatīvā atmiņa (RAM)
  { 
    id: 12, 
    name: "Corsair Vengeance 32GB DDR5", 
    category: "ram", 
    brand: "corsair", 
    price: 129.99, 
    image: "images/Corsair_Vengeance_32GB_DDR5.avif",
    description: "DDR5 atmiņa ar 5600MHz frekvenci. 32GB (2x16GB) komplekts ar zemu latenci, ideāli jaunākajām platformām un daudzuzdevumu darbam."
  },
  { 
    id: 13, 
    name: "Kingston Fury Beast 16GB DDR4", 
    category: "ram", 
    brand: "kingston", 
    price: 54.99, 
    image: "images/Kingston_Fury_Beast_16GB_DDR4.avif",
    description: "Uzticama DDR4 atmiņa 3200MHz frekvencē. 16GB (2x8GB) komplekts ar mūžīgu garantiju, lieliska izvēle budžeta sistēmām."
  },
  { 
    id: 14, 
    name: "G.Skill Trident Z5 64GB DDR5", 
    category: "ram", 
    brand: "gskill", 
    price: 249.00, 
    image: "images/G.Skill_Trident_Z5_64GB_DDR5.webp",
    description: "Augstākās klases DDR5 atmiņa ar 6000MHz+ frekvenci un RGB apgaismojumu. 64GB profesionālam darbam ar video un 3D grafikiem."
  },

  // SSD
  { 
    id: 15, 
    name: "Samsung 980 PRO 1TB NVMe", 
    category: "ssd", 
    brand: "samsung", 
    price: 119.99, 
    image: "images/Samsung_980_PRO_1TB_NVMe.jpg",
    description: "Ātrākais PCIe 4.0 NVMe SSD ar līdz 7000MB/s lasīšanas ātrumu. 1TB ietilpība ar 5 gadu garantiju, ideāls operētājsistēmai."
  },
  { 
    id: 16, 
    name: "WD Black SN850X 2TB NVMe", 
    category: "ssd", 
    brand: "western digital", 
    price: 189.00, 
    image: "images/WD_Black_SN850X_2TB_NVMe.avif",
    description: "Augstas veiktspējas 2TB NVMe disks spēlētājiem. Liela ietilpība mūsdienu spēlēm, konsekventas rakstīšanas/lasīšanas ātrums."
  },
  { 
    id: 17, 
    name: "Crucial P3 Plus 500GB", 
    category: "ssd", 
    brand: "crucial", 
    price: 49.99, 
    image: "images/Crucial_P3_Plus_500GB.jpg",
    description: "Pieejams PCIe 4.0 SSD ar 500GB ietilpību. Lieliska budžeta izvēle sistēmas diskam ar 5000MB/s+ lasīšanas ātrumu."
  },

  // HDD
  { 
    id: 18, 
    name: "Seagate BarraCuda 2TB", 
    category: "hdd", 
    brand: "seagate", 
    price: 59.99, 
    image: "images/Seagate_BarraCuda_2TB.webp",
    description: "Uzticams 2TB cietā diska disks ar 7200RPM ātrumu. Ideāls failu glabāšanai, datu rezerves kopēšanai un multimedijai."
  },
  { 
    id: 19, 
    name: "WD Blue 4TB", 
    category: "hdd", 
    brand: "western digital", 
    price: 89.00, 
    image: "images/WD_Blue_4TB.jpg",
    description: "Lielas ietilpības 4TB HDD ikdienas lietošanai. 5400RPM ekonomisks risinājums lielu failu kolekciju uzglabāšanai."
  },
  { 
    id: 20, 
    name: "Toshiba P300 1TB", 
    category: "hdd", 
    brand: "toshiba", 
    price: 44.99, 
    image: "images/Toshiba_P300_1TB.jpg",
    description: "Budžeta 1TB disks ar 7200RPM. Piemērots kā papildus disk datu glabāšanai birojs sistemās un mājas datoros."
  },

  // Barošanas bloki (PSU)
  { 
    id: 21, 
    name: "Corsair RM850x 850W 80+ Gold", 
    category: "psu", 
    brand: "corsair", 
    price: 139.99, 
    image: "images/Corsair_RM850x_850W_80_Gold.avif",
    description: "850W modulārs PSU ar 80+ Gold sertifikātu. Kluss darbība, pilna kabeļu modulāritāte un 10 gadu garantija augstas klases sistēmām."
  },
  { 
    id: 22, 
    name: "EVGA SuperNOVA 750W 80+ Platinum", 
    category: "psu", 
    brand: "evga", 
    price: 119.00, 
    image: "images/EVGA_SuperNOVA_750W_80_Platinum.jpg",
    description: "750W PSU ar izcilu 92% efektivitāti (80+ Platinum). Pilnigi modulārs dizains un uzticama darbība ar 10 gadu garantiju."
  },
  { 
    id: 23, 
    name: "be quiet! Pure Power 11 600W", 
    category: "psu", 
    brand: "be quiet", 
    price: 79.99, 
    image: "images/be_quiet_Pure_Power_11_600W.jpg",
    description: "600W budžeta PSU ar 80+ Gold efektivitāti. Klusa darbība un uzticama kvalitāte vidējas klases sistēmām ar 5 gadu garantiju."
  },

  // Korpusi (Case)
  { 
    id: 24, 
    name: "NZXT H510 Flow Mid Tower", 
    category: "case", 
    brand: "nzxt", 
    price: 89.99, 
    image: "images/NZXT_H510_Flow_Mid_Tower.jpg",
    description: "Modern Mid Tower korpuss ar uzlabotu gaisa plūsmu. Tīra kabelu vadīšana, stikla sānu panelis un vieta līdz 6 ventilatoriem."
  },
  { 
    id: 25, 
    name: "Corsair 4000D Airflow", 
    category: "case", 
    brand: "corsair", 
    price: 104.99, 
    image: "images/Corsair_4000D_Airflow.avif",
    description: "Populārs ATX korpuss ar izcilu ventilāciju. Tērauda konstrukcija, optimāla gaisa plūsma un vieta līdz 360mm radiātoriem."
  },
  { 
    id: 26, 
    name: "Fractal Design Meshify C", 
    category: "case", 
    brand: "fractal design", 
    price: 99.00, 
    image: "images/Fractal_Design_Meshify_C.jpeg",
    description: "Kompakts Mid Tower ar agresīvu dizainu. Pilnigs mesh priekšējais panelis maksimālai ventilācijai un modernām komponentēm."
  },

  // Ventilatori (Fan)
  { 
    id: 27, 
    name: "Noctua NF-A12x25 PWM", 
    category: "fan", 
    brand: "noctua", 
    price: 32.99, 
    image: "images/Noctua_NF_A12x25_PWM.avif",
    description: "Labākais 120mm ventilators tirgū. Izcilas performanča, kluss darbība (22.6 dBA) un 6 gadu garantija ar premīcijas kvalitāti."
  },
  { 
    id: 28, 
    name: "Arctic P12 PWM", 
    category: "fan", 
    brand: "arctic", 
    price: 19.99, 
    image: "images/Arctic_P12_PWM.avif",
    description: "120mm ventilators ar izcilu cenas-kvalitātes attiecību. Labs gaisa spīdiens, PWM kontrole un klusa darbība."
  },
  { 
    id: 29, 
    name: "Corsair iCUE QL120 RGB", 
    category: "fan", 
    brand: "corsair", 
    price: 119.99, 
    image: "images/Corsair_iCUE_QL120_RGB.avif",
    description: "Premium RGB ventilators ar 34 LED. Divpusējs apgaismojums, iCUE programmatūras kontrole un labs dzesešanas efekts."
  },

];
