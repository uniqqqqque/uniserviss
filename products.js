export const products = [
  // Videokartes (GPU)
  { 
    id: 1, 
    name: "ASUS TUF RTX 4070 Ti", 
    category: "gpu", 
    brand: "asus", 
    price: 949, 
    image: "images/ASUS_TUF_RTX_4070_Ti.jpg",
    description: "Profesionāla videokarte augsta līmeņa 4K spēļu un 3D renderēšanai. ASUS TUF garantē maksimālu uzticamību un efektivitāti.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Atmiņa: 12GB GDDR6X\n  • Bita daudzums: 384-bitu\n  • GPU frekvence: 2610 MHz\n  • TDP: 285W"
  },
  { 
    id: 2, 
    name: "GIGABYTE RTX 4060 GAMING OC", 
    category: "gpu", 
    brand: "gigabyte", 
    price: 479, 
    image: "images/GIGABYTE_RTX_4060.jpg",
    description: "Kompakta un efektīva videokarte ikdienas spēļu un multimedijas uzdevumiem. Izcila izvēle maziem sistēmiem ar ierobežotu energoapgādi.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Atmiņa: 8GB GDDR6\n  • Bita daudzums: 128-bitu\n  • GPU frekvence: 2505 MHz\n  • TDP: 130W"
  },
  { 
    id: 3, 
    name: "Gigabyte Radeon RX 7800 XT GAMING OC", 
    category: "gpu", 
    brand: "gigabyte", 
    price: 599, 
    image: "images/Gigabyte_Radeon_RX_7800.jpg",
    description: "AMD RDNA 3 arhitektūra ar lielāko veiktspēji vidējā cena diapazonā. Izcila izvēle 1440p un 4K spēļu spēlēšanai ar augstiem iestatījumiem.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Atmiņa: 16GB GDDR6\n  • Bita daudzums: 256-bitu\n  • GPU frekvence: 2430 MHz\n  • TDP: 250W"
  },
  { 
    id: 4, 
    name: "ASUS ROG Strix RTX 4090 GAMING OC", 
    category: "gpu", 
    brand: "asus", 
    price: 1899, 
    image: "images/ASUS_ROG_Strix_RTX_4090.jpg",
    description: "Visspēcīgākā patērētāju klases videokarte uz planētas ar neparasti lielu atmiņu. Ideāla profesionālai 3D modelēšanai, video editēšanai un ekstrēmas spēļu veiktspējai.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Atmiņa: 24GB GDDR6X\n  • Bita daudzums: 384-bitu\n  • GPU frekvence: 2505 MHz\n  • TDP: 450W"
  },

  // Procesori (CPU)
  { 
    id: 5, 
    name: "AMD Ryzen 7 7800X3D", 
    category: "cpu", 
    brand: "amd", 
    price: 359, 
    image: "images/AMD_Ryzen_7_7800X3D.jpg",
    description: "Lēmējs spēļu veiktspējas kategorijā ar revolucionāro 3D V-Cache tehnoloģiju. 96MB kešatmiņa nodrošina nepārspējamu 1080p un 1440p spēļu ātrumu.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Kodoli/Pavedieni: 8/16\n  • Bāzes/Boost: 4.2/5.0 GHz\n  • V-Cache: 96MB\n  • TDP: 120W"
  },
  { 
    id: 6, 
    name: "Intel Core i5-13600K", 
    category: "cpu", 
    brand: "intel", 
    price: 299, 
    image: "images/Intel_Core_i5_13600K.jpg",
    description: "13. paaudzes Raptor Lake ar efektīvu hibrīdarhitektūru. Lielisks universāls izvēle spēļu un darba stacijā ar labiem cenu-veiktspējas parametriem.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Kodoli/Pavedieni: 14 (10P+4E)/20\n  • Bāzes/Boost: 3.4/5.3 GHz\n  • LGA1700 platforma\n  • TDP: 125W"
  },
  { 
    id: 7, 
    name: "AMD Ryzen 9 7950X", 
    category: "cpu", 
    brand: "amd", 
    price: 549, 
    image: "images/AMD_Ryzen_9_7950X.jpg",
    description: "Masīvs 16 kodolu flagmanis kontentus ražošanas profesionāļiem. Pilnīgas izpildes Premierem, Blendaram, C4D un citiem resursu intensīviem uzdevumiem.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Kodoli/Pavedieni: 16/32\n  • Bāzes/Boost: 4.5/5.7 GHz\n  • L3 kešatmiņa: 64MB\n  • TDP: 162W"
  },
  { 
    id: 8, 
    name: "Intel Core i7-14700K", 
    category: "cpu", 
    brand: "intel", 
    price: 419, 
    image: "images/Intel_Core_i7_14700K.jpg",
    description: "Avanzēta Arrow Lake arhitektūra ar 20 kodoliem augstveiktspējīgiem darbiniekam. Izcila izvēle spēļu, streaming un video editēšanas jauktiem darbiem.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Kodoli/Pavedieni: 20 (8P+12E)/28\n  • Bāzes/Boost: 3.4/5.6 GHz\n  • L3 kešatmiņa: 33MB\n  • TDP: 125W"
  },

  // Mātesplates (MBR)
  { 
    id: 9, 
    name: "ASUS ROG Strix B650-A", 
    category: "mbr", 
    brand: "asus", 
    price: 249, 
    image: "images/ASUS_ROG_Strix_B650_A.jpg",
    description: "Premium AM5 mātesplate ar grandioziem palaiš anas un stabilitātes raksturlielumiem. ROG sērija pazīstama pārkl āļu entuziastiem un ekstrēmajiem iestatījumiem.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Audio: Realtek ALC1220-VB\n  • BIOS: 28 Mb ROM\n  • VRM fāzes: 18+2\n  • Maksimālā RAM: 192GB DDR5"
  },
  { 
    id: 10, 
    name: "MSI MAG Z790 Tomahawk", 
    category: "mbr", 
    brand: "msi", 
    price: 289, 
    image: "images/MSI_MAG_Z790_Tomahawk.png",
    description: "Moderni un spēcīgi LGA1700 kodolplāne ar PCIe 5.0 atbalstu. Perfekti saderīga ar visiem Intel 13. un 14. paaudzes procesoriem un DDR5 atmiņu.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Audio: Realtek ALC897\n  • BIOS: 64 Mb SPI ROM\n  • VRM fāzes: 18+1\n  • PCIe 5.0 atbalsts"
  },
  { 
    id: 11, 
    name: "Gigabyte B760M DS3H", 
    category: "mbr", 
    brand: "gigabyte", 
    price: 129, 
    image: "images/Gigabyte_B760M_DS3H.png",
    description: "Kompakta mATX kodolplāne ar DDR4 saderību un noturīgiem raksturlielumiem. Lieliska izvēle maziem noteiktiem konfigurācijām, kas neparedz DDR5 maksimumu.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Forma: Micro-ATX\n  • VRM jaudas fāzes: 10+1\n  • Audio: Realtek ALC897\n  • Maksimālā RAM: 192GB DDR4"
  },

  // Operatīvā atmiņa (RAM)
  { 
    id: 12, 
    name: "Corsair Vengeance 32GB DDR5", 
    category: "ram", 
    brand: "corsair", 
    price: 129,
    image: "images/Corsair_Vengeance_32GB_DDR5.avif",
    description: "Ātra DDR5 atmiņa ar garantētu stabilitāti un Corsair garantiju. Nokrāsa dizains un vienkāršs instalācija padara to lielisaku izvēli jebkuram AMD AM5 vai Intel LGA1700 sistēmam.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Kapacitāte: 32GB (2x16GB)\n  • Frekvence: 5600MHz\n  • Spriegums: 1.25V\n  • Latency: CAS 28"
  },
  { 
    id: 13, 
    name: "Kingston Fury Beast 16GB DDR4", 
    category: "ram", 
    brand: "kingston", 
    price: 54,
    image: "images/Kingston_Fury_Beast_16GB_DDR4.avif",
    description: "Lētas un uzticamas DDR4 opcijas lietotājiem ar esošajām Intel vai AMD platformām. Kingston Fury Beast pazīstams ar stabilitāti un vienkāršu saderību ar lielāko BIOS.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Kapacitāte: 16GB (2x8GB)\n  • Frekvence: 3200MHz\n  • Spriegums: 1.35V\n  • Latency: CAS 16"
  },
  { 
    id: 14, 
    name: "G.Skill Trident Z5 64GB DDR5", 
    category: "ram", 
    brand: "gskill", 
    price: 249,
    image: "images/G.Skill_Trident_Z5_64GB_DDR5.webp",
    description: "Ekstrēmas jaudas DDR5 komplekts ar RGB apgaismojumu un augstiem taktiem. Ideāls par kontentus ražošanu, virtuālajiem mašīnām un uzpūtiem spēļu sistēmam.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Kapacitāte: 64GB (2x32GB)\n  • Frekvence: 6000MHz\n  • Spriegums: 1.40V\n  • Latency: CAS 30"
  },

  // SSD
  { 
    id: 15, 
    name: "Samsung 980 PRO 1TB NVMe", 
    category: "ssd", 
    brand: "samsung", 
    price: 119,
    image: "images/Samsung_980_PRO_1TB_NVMe.jpg",
    description: "Klases vadošais PCIe 4.0 disks ar iedvesmojošiem ātrumiem un Samsung uzticamību. Izcila veiktspēja boot, spēļu ielādes un darba slodzēm ar papildu siltuma rezistenci.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Kapacitāte: 1TB\n  • Interfejs: NVMe PCIe 4.0\n  • Lasīšana: 7000MB/s\n  • Rakstīšana: 6000MB/s"
  },
  { 
    id: 16, 
    name: "WD Black SN850X 2TB NVMe", 
    category: "ssd", 
    brand: "western digital", 
    price: 189,
    image: "images/WD_Black_SN850X_2TB_NVMe.avif",
    description: "Jaudīgs un ātrs disks spēlētāju un kreiators ar dubultoto ietilpību. Western Digital Black pazīstams par agresīvo darb īšanu un vidēja līmeņa gaming optimizāciju.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Kapacitāte: 2TB\n  • Interfejs: NVMe PCIe 4.0\n  • Lasīšana: 7100MB/s\n  • Rakstīšana: 6000MB/s"
  },
  { 
    id: 17, 
    name: "Crucial P3 Plus 500GB", 
    category: "ssd", 
    brand: "crucial", 
    price: 49,
    image: "images/Crucial_P3_Plus_500GB.jpg",
    description: "Budžeta-draudzīga PCIe 4.0 opcija papildu krātuves vai noslēgu sistēmām. Crucial P3 Plus nodrošina izcilu cenu-veiktspējas attiecību mazākām ietilpības vajadzībām.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Kapacitāte: 500GB\n  • Interfejs: NVMe PCIe 4.0\n  • Lasīšana: 5100MB/s\n  • Rakstīšana: 3500MB/s"
  },

  // HDD
  { 
    id: 18, 
    name: "Seagate BarraCuda 2TB", 
    category: "hdd", 
    brand: "seagate", 
    price: 59,
    image: "images/Seagate_BarraCuda_2TB.webp",
    description: "Draugs HDD risinājums masīvajiem datu krātuves, saglabāšanai un sīkfailiem. Seagate BarraCuda pierādīts darbinieks ar maksimālo uzticamību un saprātīgu cenu.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Kapacitāte: 2TB\n  • Ātrums: 7200 RPM\n  • Saskarne: SATA 6Gb/s\n  • Trokšņa līmenis: 8.9 dB"
  },
  { 
    id: 19, 
    name: "WD Blue 4TB", 
    category: "hdd", 
    brand: "western digital", 
    price: 89,
    image: "images/WD_Blue_4TB.jpg",
    description: "Lielas ietilpības un klusa vidēja klases HDD lieliem krātuves un archīviem. Western Digital Blue nodrošina labāko cenu un enerģijas efektivitāti datora smagi darbinieki.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Kapacitāte: 4TB\n  • Ātrums: 5400 RPM\n  • Saskarne: SATA 6Gb/s\n  • Trokšņa līmenis: 6.2 dB"
  },
  { 
    id: 20, 
    name: "Toshiba P300 1TB", 
    category: "hdd", 
    brand: "toshiba", 
    price: 44,
    image: "images/Toshiba_P300_1TB.jpg",
    description: "Pieejams un ekonomisks HDD risinājums spēļu dokumentu krātuvei vai sīkfailu datu bāzei. Toshiba P300 ir kompakts un vibrācijas draugs svarīgs mājas vai biroja serverim.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Kapacitāte: 1TB\n  • Ātrums: 7200 RPM\n  • Saskarne: SATA 6Gb/s\n  • Trokšņa līmenis: 8.6 dB"
  },

  // Barošanas bloki (PSU)
  { 
    id: 21, 
    name: "Corsair RM850x 850W 80+ Gold", 
    category: "psu", 
    brand: "corsair", 
    price: 139,
    image: "images/Corsair_RM850x_850W_80_Gold.avif",
    description: "Vidēja klases PSU ar kompromisiem starp jaudu, efektivitāti un kabeļu organizāciju. Corsair RM850x ideāls gaming sistēmu ar 4070 Ti vai RTX 4090 grafiku kartēm.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Jauda: 850W\n  • Efektivitāte: 80+ Gold\n  • Modulārs: Pilnīgs\n  • Trokšņa līmenis: 19.2 dB"
  },
  { 
    id: 22, 
    name: "EVGA SuperNOVA 750W 80+ Platinum", 
    category: "psu", 
    brand: "evga", 
    price: 119,
    image: "images/EVGA_SuperNOVA_750W_80_Platinum.jpg",
    description: "Premium 80+ Platinum PSU ar augstāko energoefektivitāti un vidēja līmeņa jaudu. EVGA SuperNOVA nodrošina sarežģītus sistēmu garantiju un ļoti labā kabeļu pārvaldības.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Jauda: 750W\n  • Efektivitāte: 80+ Platinum\n  • Modulārs: Pilnīgs\n  • Trokšņa līmenis: 17.5 dB"
  },
  { 
    id: 23, 
    name: "be quiet! Pure Power 11 600W", 
    category: "psu", 
    brand: "be quiet", 
    price: 79,
    image: "images/be_quiet_Pure_Power_11_600W.jpg",
    description: "Budžeta-draudzīga vidusm ēra klases PSU ar labs trokšņu slāpēšanu un energopatēriņu. be quiet Pure Power ir lielisks vidējie spēļu sistēmu, kas sākas ar RTX 4060 vai 4070.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Jauda: 600W\n  • Efektivitāte: 80+ Gold\n  • Modulārs: Pilnīgs\n  • Trokšņa līmenis: 18.0 dB"
  },

  // Korpusi (Case)
  { 
    id: 24, 
    name: "NZXT H510 Flow Mid Tower", 
    category: "case", 
    brand: "nzxt", 
    price: 89,
    image: "images/NZXT_H510_Flow_Mid_Tower.jpg",
    description: "Moderns un izsmeltošs mid-tower kārbas ar optimizētu gaisa dinamiku un stikla paneli. NZXT H510 Flow nodrošina labāku termiski apstākļus un vienkāršu komponentu instalāciju.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Forma: Mid Tower (ATX)\n  • Materiāls: Steel + 4mm Tempered Glass\n  • Iekļautie ventilatori: 2x140mm\n  • Maksimālā GPU: 310mm"
  },
  { 
    id: 25, 
    name: "Corsair 4000D Airflow", 
    category: "case", 
    brand: "corsair", 
    price: 104,
    image: "images/Corsair_4000D_Airflow.avif",
    description: "Klasisks un uzticams mid-tower ietvars ar izcilu ventilācijas iespējām un elastīgo dizainu. Corsair 4000D paaugstina gaisa plūsmu un nodrošina ievērojamus termiski apstākļus.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Forma: Mid Tower (ATX)\n  • Materiāls: Steel + 4mm Tempered Glass\n  • Iekļautie ventilatori: 2x120mm\n  • Maksimālā GPU: 330mm"
  },
  { 
    id: 26, 
    name: "Fractal Design Meshify C", 
    category: "case", 
    brand: "fractal design", 
    price: 99,
    image: "images/Fractal_Design_Meshify_C.jpeg",
    description: "Jaudīgs un atraktīvs mid-tower ar šķiedru mežģīni priekšpusē un tīkla skaņu dampēšanu. Fractal Design Meshify C izcila izvēle svekiem entuziastiem, kas vēlas maksimālu saldējumu.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Forma: Mid Tower (ATX)\n  • Materiāls: Steel + 4mm Tempered Glass\n  • Iekļautie ventilatori: 2x120mm\n  • Maksimālā GPU: 315mm"
  },

  // Ventilatori (Fan)
  { 
    id: 27, 
    name: "Noctua NF-A12x25 PWM", 
    category: "fan", 
    brand: "noctua", 
    price: 32,
    image: "images/Noctua_NF_A12x25_PWM.avif",
    description: "Premium ventilators par profesionālo dzesēšanu ar neparasti klusu darbību. Noctua iegūst cieņu par savu fokusiņu uz trokšņa samazinājumu un uzticamības garajam darbam.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Izmērs: 120mm\n  • Trokšņa līmenis: 22.6 dB\n  • Ātrums: 2000 RPM\n  • Maksimālais spiediens: 3.8 mmH2O"
  },
  { 
    id: 28, 
    name: "Arctic P12 PWM", 
    category: "fan", 
    brand: "arctic", 
    price: 19,
    image: "images/Arctic_P12_PWM.avif",
    description: "Ekonomisks ventilators ar solīdu jaudu un pieņemamiem trokšņu līmeņiem. Arctic P12 ideāls budžeta jaunas sistēmas vai noslodzes dzesēšanas skaitļu samazināšanai.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Izmērs: 120mm\n  • Trokšņa līmenis: 24.5 dB\n  • Ātrums: 1600 RPM\n  • Maksimālais spiediens: 2.5 mmH2O"
  },
  { 
    id: 29, 
    name: "Corsair iCUE QL120 RGB", 
    category: "fan", 
    brand: "corsair", 
    price: 119,
    image: "images/Corsair_iCUE_QL120_RGB.avif",
    description: "Spektakulārs RGB ventilators ar divpusēju LED apgaismojumu un Corsair iCUE saderību. Izcils gaming tīkls un tūlīt pamanāmi dekorācija jūsu datorā ar dinamisko RGB efektiem.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  • Izmērs: 120mm\n  • Trokšņa līmenis: 25.0 dB\n  • Ātrums: 1500 RPM\n  • RGB: 34 LED diodi"
  },

];
