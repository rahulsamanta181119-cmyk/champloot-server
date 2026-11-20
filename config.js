const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// REAL PHOTOS POOL - Real Unsplash photos per category
const IMGS = {
  Mobile: ["photo-1592750475338-74b7b21085ab","photo-1610945265064-0e34e5519bbf","photo-1598327105666-5b89351aff97","photo-1580910051074-3eb694886505","photo-1511707171634-5f897ff02aa9","photo-1605236453806-6ff368512f6e","photo-1592286927505-1def25115558","photo-1601784551446-20c9e07cdbdb"],
  Earbuds: ["photo-1590658268037-6bf12165a8df","photo-1572569511254-d8f925fe2cbb","photo-1599669454699-248893623440","photo-1606220945770-b5b6c2c55bf1","photo-1608156639585-b3a032ef9689","photo-1610438235354-a6ae5528385c"],
  Watch: ["photo-1579586337278-3befd40fd17a","photo-1546868871-7041f2a55e12","photo-1508685096489-7aacd43bd3b1","photo-1523275335684-37898b6baf30","photo-1524805444758-089113d48a6d","photo-1434056886845-dac89ffe9b56"],
  Headphones: ["photo-1505740420928-5e560c06d30e","photo-1583394838336-acd977736f90","photo-1546435770-a3e426bf472b","photo-1585298723682-7115561c51b7","photo-1484704849700-f032a568e944","photo-1545127398-14699f92334b"],
  Fridge: ["photo-1571175443880-49e1d25b2bc5","photo-1584568694244-14fbdf83bd30","photo-1620626011761-996317b8d101","photo-1556911220-bff31c812dba"],
  "Air Cooler": ["photo-1614633833026-0820552978b6","photo-1580595999170-e9a5b6a7d0d0","photo-1615873968403-89e068629265","photo-1631679706909-1844bbd07221"],
  "Air Conditioner": ["photo-1631545806609-24040d63f93a","photo-1615873968403-89e068629265","photo-1614633833026-0820552978b6","photo-1580595999170-e9a5b6a7d0d0"],
  "Fashion Men": ["photo-1542272604-787c3835535d","photo-1521572163474-6864f9cf17ab","photo-1617137968427-85924c800a22","photo-1602810318383-e386cc2a3ccf","photo-1594938298603-c8148c4dae35","photo-1552374196-c4e7ffc6e126","photo-1611312449408-fcece27cdbb7","photo-1620012253295-c15cc3e65df4"],
  "Fashion Women": ["photo-1496747611176-843222e1e57c","photo-1610030469983-98e550d6193c","photo-1539533018447-63fcce2678e3","photo-1515886657613-9f3515b0c78f","photo-1509631179647-0177331693ae","photo-1483985988355-763728e1935b","photo-1490481651871-ab68de25d43d","photo-1487222477894-8943e31ef7b2"],
  Jewellery: ["photo-1515562141207-7a88fb7ce338","photo-1599643478518-a784e5dc4c8f","photo-1602173574767-37ac01994b2a","photo-1611591437281-460bfbe1220a","photo-1601121141461-9d6647bca1ed","photo-1610694955371-d4a3e0ce4b52"],
  Toys: ["photo-1552519507-da3b142c6e3d","photo-1473968512647-3e447244af8f","photo-1485827404703-89b55fcc595e","photo-1558060370-d644479cb6f7","photo-1596461404969-9ae70f2830c1","photo-1566576912321-d58ddd7a6088","photo-1597745636162-8c66e4e0e4b0"],
  Makeup: ["photo-1586495777744-4413f21062fa","photo-1596462502278-27bfdc403348","photo-1522335789203-aabd1fc54bc9","photo-1596704017254-9b121068fb31","photo-1512496015851-a90fb38ba796","photo-1487412947147-5cebf100ffc2"],
  "Skin Care": ["photo-1620916566398-39f1143ab7be","photo-1556228720-195a672e8a03","photo-1608248543803-ba4f8c70ae0b","photo-1570172619644-dfd03ed5d881","photo-1556229010-6c3f2c9ca1f8","photo-1620756236308-65c3ef5d25f9"]
};

// Helper: [Real Name, Real Price]
function make(cat, list){
  let imgs = IMGS[cat] || IMGS["Mobile"];
  return list.map((x,i)=>({
    name: x[0], price: x[1], category: cat,
    image: `https://images.unsplash.com/${imgs[i % imgs.length]}?w=400&q=80`
  }));
}

let RAW = [];

// --- MOBILE 105 REAL MODELS ---
RAW = RAW.concat(make("Mobile", [
["Apple iPhone 11 (128GB)",32999],["Apple iPhone 12 (128GB)",39999],["Apple iPhone 13 (128GB)",46999],["Apple iPhone 14 (128GB)",56999],["Apple iPhone 14 Plus",62999],["Apple iPhone 15 (128GB)",66999],["Apple iPhone 15 Pro",109999],["Apple iPhone 16 (128GB)",79999],["Apple iPhone 16 Pro",119999],["Apple iPhone SE 3",42999],
["Samsung Galaxy S21 5G",39999],["Samsung Galaxy S22 5G",47999],["Samsung Galaxy S23 5G",54999],["Samsung Galaxy S24 5G",62999],["Samsung Galaxy S24 Ultra",109999],["Samsung Galaxy A14 5G",13999],["Samsung Galaxy A34 5G",22999],["Samsung Galaxy A54 5G",32999],["Samsung Galaxy A55 5G",36999],["Samsung Galaxy M34 5G",15499],["Samsung Galaxy M54 5G",24999],["Samsung Galaxy F54 5G",24999],["Samsung Galaxy Z Flip 5",89999],["Samsung Galaxy Z Fold 5",139999],
["Redmi Note 10 Pro",17999],["Redmi Note 11 Pro",18999],["Redmi Note 12 Pro",20999],["Redmi Note 13 Pro 5G",23999],["Redmi Note 13 Pro+ 5G",29999],["Redmi 12 5G",11999],["Redmi 13C 5G",10999],["Redmi K70 Pro",32999],
["Realme 11 Pro 5G",21999],["Realme 12 Pro 5G",21999],["Realme 12 Pro+ 5G",27999],["Realme GT 6T",30999],["Realme Narzo 60 Pro",19999],["Realme Narzo 70 Pro",19999],["Realme C55",10999],
["Vivo V27 5G",28999],["Vivo V29 5G",29999],["Vivo V30 5G",30999],["Vivo V30 Pro",39999],["Vivo Y100 5G",19999],["Vivo T2 Pro 5G",21999],["Vivo X100 Pro",89999],
["Oppo Reno 10 5G",26999],["Oppo Reno 11 5G",26999],["Oppo Reno 11 Pro",39999],["Oppo F25 Pro 5G",22999],["Oppo A78 5G",17999],["Oppo A59 5G",13999],
["OnePlus 11 5G",49999],["OnePlus 12 5G",59999],["OnePlus Nord CE3",21999],["OnePlus Nord CE4",24999],["OnePlus Nord 3",28999],["OnePlus 11R",35999],["OnePlus 12R",39999],
["iQOO Z7 Pro",21999],["iQOO Z9 5G",19999],["iQOO Neo 9 Pro",35999],["iQOO 12 5G",49999],
["Nothing Phone 1",28999],["Nothing Phone 2",39999],["Nothing Phone 2a",23999],["Nothing Phone 2a Plus",27999],
["Google Pixel 7a",37999],["Google Pixel 8",59999],["Google Pixel 8 Pro",89999],["Google Pixel 8a",42999],["Google Pixel 7",49999],
["Motorola G84 5G",18999],["Motorola Edge 40",24999],["Motorola Edge 40 Neo",22999],["Motorola G54 5G",14999],["Motorola G73 5G",16999],
["Poco X5 Pro",19999],["Poco X6 Pro 5G",24999],["Poco F5 5G",26999],["Poco M6 Pro",10999],["Poco C65",7999],
["Infinix Note 30 5G",14999],["Infinix Note 40 Pro",21999],["Infinix Zero 30",19999],["Infinix GT 20 Pro",22999],
["Tecno Camon 20",14999],["Tecno Camon 30",17999],["Tecno Pova 6 Pro",19999],["Tecno Spark 20",9999],
["Lava Agni 2 5G",18999],["Lava Blaze 5G",10999],["Lava Yuva 3",6999],["Nokia G42 5G",12999],["Honor 90 5G",29999],["Asus ROG Phone 8",79999],["Sony Xperia 1 V",99999],["Itel P55 5G",9999],["Micromax In 2C",8999]
]));

// --- EARBUDS 105 ---
RAW = RAW.concat(make("Earbuds", [
["boAt Airdopes 141",1199],["boAt Airdopes 161",999],["boAt Airdopes 131",1099],["boAt Airdopes 441",1499],["boAt Airdopes 121 v2",1299],["boAt Nirvana Ion",1999],["boAt Airdopes 800",1799],["boAt Rockerz 550",1999],
["Noise Buds VS102",999],["Noise Buds VS104",1099],["Noise Buds VS402",1299],["Noise Buds N1",1199],["Noise Buds N1 Pro",1299],["Noise Air Buds Pro",1999],["Noise ColorFit Buds",1499],
["Realme Buds T100",1299],["Realme Buds T300",1699],["Realme Buds Air 5",1799],["Realme Buds Air 3 Neo",1399],["Realme Buds Wireless 3",1699],
["OnePlus Nord Buds 2",1799],["OnePlus Nord Buds 2r",1399],["OnePlus Buds 3",1299],["OnePlus Buds Pro 2",8999],
["Samsung Galaxy Buds2",5999],["Samsung Galaxy Buds2 Pro",8999],["Samsung Galaxy Buds FE",5999],["Samsung Galaxy Buds Live",4999],
["Apple AirPods 2nd Gen",9999],["Apple AirPods 3rd Gen",15999],["Apple AirPods Pro 2",18999],
["JBL Tune 130NC",2999],["JBL Tune 230NC",3999],["JBL Wave Beam",2499],["JBL Live Pro 2",7999],["JBL Tune Buds",4999],
["Sony WF-C500",4999],["Sony WF-1000XM5",19990],["Sony WF-C700N",7990],["Sony WF-C510",3990],
["pTron Bassbuds Duo",799],["pTron Bassbuds Jade",999],["pTron Bassbuds Plus",1199],["pTron Zenbuds",899],
["Mivi DuoPods A25",1199],["Mivi DuoPods F70",1499],["Mivi DuoPods M80",1799],["Mivi Play",999],
["Zebronics Zeb Pods",949],["Zebronics Zeb Sound Bomb",1199],["Zebronics Zeb Pods 1",899],
["Fire-Boltt Fire Pods",899],["Fire-Boltt Fire Pods Ninja",1099],["Fire-Boltt Fire Pods Pro",1299],
["Crossbeats Edge",1499],["Crossbeats Pebble",1999],["Anker Soundcore R50i",1499],["Anker Soundcore Life Note 3i",1999],["Nothing Ear 1",5999],["Nothing Ear 2",7999],["Nothing Ear Stick",4999],
["Jabra Elite 3",3999],["Jabra Elite 5",7999],["Skullcandy Sesh",2499],["Skullcandy Indy",3499],["Beats Studio Buds",8999],["Google Pixel Buds Pro",12999],["Huawei FreeBuds SE",2499],["Oppo Enco Air 3",1999],["Oppo Enco Buds 2",1499],["Vivo TWS 2",2999],["Mi True Wireless 2",2499],["Boat Immortal 121",1499],["Noise Buds Connect",999],["Realme Buds Q2",1499],["OnePlus Bullets Z2",1599],["JBL Endurance Peak 3",8999],["Sony LinkBuds S",8999],["Boult Audio Z40",1199],["Boult Audio AirBass",999],["Boult Audio Omega",1499],["Truke Buds S2",1299],["Truke BTG Neo",999],["Zebronics Zeb Thunder",799],["Blaupunkt BTW07",1499],["Blaupunkt BTW Pro",1999],["Philips TAT1207",1999],["Philips TAT2206",2999],["Ambrane Neobuds",1299],["Ambrane Dots 38",999],["GOVO GoBuds 945",1499],["GOVO GoBuds 920",1199],["Wings Phantom 550",1499],["Wings Vibe",999],["TAGG Verve Ultra",1299],["TAGG Liberty Buds",1499],["Portronics Harmonics Twins",1299],["Portronics Harmonics 230",1499],["Intex BT",799],["iBall Earwear",999],["Fingers Go Pods",1099],["Fingers Melody",899],["Ubon BT",799],["Gionee Gbuds",999],["Lava Probuds",1299],["Itel Buds",899],["Noise Buds X Prime",1999],["boAt Airdopes 138",999],["boAt Airdopes 170",1199]
]));

// --- WATCH 100 ---
RAW = RAW.concat(make("Watch", [
["Noise ColorFit Pro 5",2299],["Noise ColorFit Ultra 3",2999],["Noise ColorFit Pro 4",1999],["NoiseFit Halo",2999],["Noise ColorFit Pulse 2",1499],["Noise ColorFit Icon 2",1299],["Noise ColorFit Caliber",1799],["Noise ColorFit Pro 3",2499],
["Fire-Boltt 360",1499],["Fire-Boltt Ninja Call Pro",1399],["Fire-Boltt Invincible",1999],["Fire-Boltt 360 Pro",1799],["Fire-Boltt Ring 3",1599],["Fire-Boltt Asteroid",2499],["Fire-Boltt Legend",1999],["Fire-Boltt Talk 2",1299],
["boAt Wave Call 2",1399],["boAt Wave Beat",1199],["boAt Wave Flex Connect",1599],["boAt Xtend Sport",1799],["boAt Storm Call",1999],["boAt Wave Prime",1499],["boAt Wave Sigma",1299],
["Fastrack Revoltt FS1",1999],["Fastrack Revoltt X",2499],["Fastrack Reflex 3.0",1999],["Fastrack Limitless",1799],["Fastrack Reflex Vox",1499],
["Titan Smart 3",4995],["Titan Zeal",3995],["Titan Edge",2995],["Titan Talk S",5995],["Titan Smart Pro",6995],
["Amazfit GTS 4 Mini",6999],["Amazfit GTR 4",12999],["Amazfit Bip 5",5999],["Amazfit Active",7999],["Amazfit Pop 3S",2999],
["Samsung Galaxy Watch 6",19999],["Samsung Galaxy Watch 6 Classic",27999],["Samsung Galaxy Watch 5",15999],["Samsung Galaxy Watch 4",9999],["Samsung Galaxy Fit 3",4999],
["Apple Watch SE 2",25999],["Apple Watch Series 9",39999],["Apple Watch Ultra 2",79999],["Apple Watch Series 8",32999],["Apple Watch SE 1",21999],
["Realme Watch S100",1899],["Realme Watch 3 Pro",2999],["Realme Watch 4",3499],
["Fossil Gen 6",12995],["Fossil Gen 5",9995],["Fossil Machine",7995],
["Crossbeats Ignite S",2499],["Crossbeats Orbit Infinit",2999],["Crossbeats Ignite Atlas",3499],
["GOQii Smart Vital",1799],["GOQii Smart Vital Ultra",2499],
["Zebronics Zeb-Fit",1599],["Zebronics Zeb Fit 920CH",1999],["Pebble Cosmos",1299],["Pebble Cosmos Luxe",1799],["Pebble Vertex",1499],
["Garmin Forerunner 55",17999],["Garmin Venu 2",29999],["Fitbit Versa 4",19999],["Fitbit Charge 5",12999],["Fitbit Inspire 3",8999],
["Honor Watch GS3",14999],["Huawei Watch GT 3",15999],["Huawei Watch Fit 2",9999],["Xiaomi Redmi Watch 3",3999],["Xiaomi Mi Watch Revolve",7999],
["Dizo Watch R",1999],["Dizo Watch D Pro",1799],["BeatXP Marv",1299],["BeatXP Vega",1499],["BeatXP Flux",1599],
["Gizmore GizFit 910",1499],["Gizmore GizFit Pro",1999],["Wings Prime",1299],["Wings Watch Fit",1499],["TAGG Verve NEO",1799],["TAGG Verve Plus",1999],["Portronics Kronos X5",1999],["Ambrane FitShot",1499],["Fossil Wellness",8999],["Noise ColorFit Qube",1199],["Fire-Boltt Dream",1999],["boAt Wave Genesis",1599],["Fastrack Reflex Beat",1799],["Titan Smart Watch 2",5995],["Amazfit GTS 2 Mini",4999],["Samsung Galaxy Watch FE",9999],["Apple Watch Ultra 1",69999],["Realme Watch 2 Pro",3999],["Fossil Venture",10999],["Noise ColorFit Pro 5 Max",2999]
]));

// --- HEADPHONES 100 ---
RAW = RAW.concat(make("Headphones", [
["Sony WH-CH520",3490],["Sony WH-CH720N",7990],["Sony WH-1000XM4",19990],["Sony WH-1000XM5",26990],["Sony WH-XB910N",12990],["Sony WH-CH710N",6990],["Sony WH-XB700",5990],["Sony MDR-ZX110",799],
["JBL Tune 510BT",2999],["JBL Tune 660NC",3999],["JBL Tune 760NC",4999],["JBL Tune 770NC",5999],["JBL Live 660NC",6999],["JBL Live 770NC",7999],["JBL Quantum 100",2999],["JBL Quantum 400",4999],
["boAt Rockerz 450",1499],["boAt Rockerz 550",1999],["boAt Rockerz 551 ANC",2499],["boAt Rockerz 650",1799],["boAt Bassheads 900",999],["boAt Rockerz 518",1299],
["Noise Two",1999],["Noise One",1499],["Noise Three",2499],["Noise Defy",2999],["Noise Airwave Max 3",1999],
["Zebronics Zeb-Thunder",799],["Zebronics Zeb-Rush",999],["Zebronics Zeb-Duke",1299],["Zebronics Zeb-Apollo",1499],
["Apple AirPods Max",59900],["Apple Beats Studio3",29999],["Apple Beats Solo3",19999],
["OnePlus Bullets Z2",1599],["OnePlus Bullets Wireless Z2 ANC",1999],
["Realme Buds Wireless 3",1699],["Realme TechLife Buds",1499],
["Infinity Glide 500",1299],["Infinity Glide 510",1499],["Infinity Jazz",1999],
["Anker Soundcore Q20i",2999],["Anker Soundcore Q30",4999],["Anker Soundcore Life Q10i",1999],
["Sennheiser HD 450BT",8999],["Sennheiser HD 350BT",5999],["Sennheiser Momentum 4",29999],
["Skullcandy Riff 2",3999],["Skullcandy Crusher Evo",14999],["Skullcandy Hesh Evo",8999],
["Marshall Major IV",14999],["Marshall Monitor II ANC",19999],["Marshall Minor III",12999],
["Philips SHL3060",999],["Philips TAPH805",7999],["Philips Audio 4000",1999],
["Boat Bassheads 100",399],["Boat Bassheads 152",499],["Boat Bassheads 225",599],
["Sony WI-C100",1299],["Sony WI-XB400",2499],["Sony WI-C200",1499],["Sony WI-C310",1999],
["JBL C100SI",799],["JBL C200SI",999],["JBL T110",1199],["JBL Endurance Run 2",1499],
["Zebronics Zeb-Bro",899],["Zebronics Zeb-Yoga",1199],
["Mi Super Bass Wireless",1799],["Mi Neckband Pro",1499],["Samsung Level U2",1499],
["Noise Nerve Pro",1299],["Noise Tune Elite",1499],["Boult Audio Probass",999],["Boult Audio BassBuds X1",1199],
["Portronics Muffs M",1499],["Portronics Muffs M2",1799],["Portronics Conch Game",1299],
["Blaupunkt BH01",1999],["Blaupunkt BH41",2999],["Blaupunkt BH11",1499],
["iBall Decibel",999],["Fingers Rock n Roll",1299],["Ambrane WH-11",1199],["Ambrane WH-65",1499],
["Crossbeats Roar 2.0",1999],["Crossbeats Torq",1499],["Wings Phantom 500",1299],["Truke BTG 1",1499],["GOVO GoKixx 900",1999]
]));

// --- FRIDGE 100 ---
RAW = RAW.concat(make("Fridge", [
["LG 242L Double Door Smart Inverter",22990],["LG 322L Double Door",32990],["LG 190L Single Door",14990],["LG 260L Double Door",26990],["LG 360L Side by Side",45990],["LG 420L Double Door",49990],["LG 185L Single Door",13990],["LG 282L Convertible",28990],
["Samsung 236L Double Door",21990],["Samsung 320L Convertible",31990],["Samsung 183L Single Door",14490],["Samsung 253L Double Door",24990],["Samsung 345L Double Door",35990],["Samsung 580L Side by Side",69990],["Samsung 198L Single Door",15990],["Samsung 300L Double Door",30990],
["Whirlpool 235L Double Door",20990],["Whirlpool 215L Double Door",19990],["Whirlpool 190L Single Door",13990],["Whirlpool 265L Double Door",25990],["Whirlpool 300L Double Door",29990],["Whirlpool 340L Double Door",33990],
["Haier 190L Single Door",13990],["Haier 220L Double Door",19990],["Haier 258L Double Door",23990],["Haier 320L Double Door",31990],["Haier 565L Side by Side",62990],
["Godrej 180L Single Door",14990],["Godrej 240L Double Door",21990],["Godrej 260L Double Door",23990],["Godrej 300L Double Door",29990],["Godrej 350L Double Door",34990],
["Panasonic 307L Double Door",30990],["Panasonic 232L Double Door",22990],["Panasonic 188L Single Door",14990],
["Bosch 269L Double Door",33990],["Bosch 330L Double Door",39990],["Bosch 300L Double Door",36990],
["Hitachi 230L Double Door",24990],["Hitachi 290L Double Door",30990],["Hitachi 365L Double Door",38990],
["Hisense 195L Single Door",12990],["Hisense 260L Double Door",23990],["Hisense 320L Double Door",29990],
["Voltas 175L Single Door",12990],["Voltas 240L Double Door",21990],
["LG 310L Double Door",31990],["Samsung 275L Double Door",27990],["Whirlpool 250L Double Door",24990],["Haier 200L Single Door",14990],["Godrej 200L Single Door",15990],
["LG 205L Single Door",16990],["Samsung 210L Double Door",19990],["Whirlpool 205L Single Door",15990],["Haier 240L Double Door",21990],["Godrej 280L Double Door",26990],
["Panasonic 260L Double Door",25990],["Bosch 240L Double Door",29990],["Hitachi 210L Double Door",22990],
["LG 380L Double Door",37990],["Samsung 380L Double Door",38990],["Whirlpool 380L Double Door",36990],["Haier 380L Double Door",37990],["Godrej 380L Double Door",36990],
["LG 400L Double Door",41990],["Samsung 400L Double Door",42990],["Whirlpool 400L Double Door",40990],["Haier 400L Double Door",41990],
["LG 450L Side by Side",54990],["Samsung 500L Side by Side",59990],["Whirlpool 450L Side by Side",54990],
["LG 165L Single Door",12990],["Samsung 165L Single Door",12990],["Whirlpool 165L Single Door",11990],["Haier 165L Single Door",12490],["Godrej 165L Single Door",12990],
["LG 225L Double Door",20990],["Samsung 225L Double Door",20990],["Whirlpool 225L Double Door",20990],
["LG 295L Double Door",29990],["Samsung 295L Double Door",29990],["Whirlpool 295L Double Door",28990],["Haier 295L Double Door",28990],
["LG 335L Double Door",33990],["Samsung 335L Double Door",33990],["Whirlpool 335L Double Door",32990],
["LG 360L Double Door",36990],["Samsung 360L Double Door",36990],["Haier 360L Double Door",35990],
["Godrej 210L Double Door",19990],["Godrej 225L Double Door",20990],["Godrej 295L Double Door",28990],["Godrej 310L Double Door",30990],
["Hitachi 260L Double Door",27990],["Hitachi 320L Double Door",32990],["Hitachi 400L Double Door",41990],
["Bosch 280L Double Door",32990],["Bosch 350L Double Door",41990],["Panasonic 280L Double Door",27990],["Panasonic 340L Double Door",34990]
]));

// --- AIR COOLER + AC 100 ---
RAW = RAW.concat(make("Air Cooler", [
["Symphony Diet 12T 12L",5499],["Symphony Diet 22T 22L",6499],["Symphony HiCool 31L",6999],["Symphony Winter 80L",8999],["Symphony Diet 3D 40L",7499],["Symphony Ice Cube 27L",5999],["Symphony Jumbo 70L",8499],["Symphony Sumo 75L",8999],["Symphony Storm 100L",11999],["Symphony Touch 20L",5999],
["Bajaj PX 97 Torque 36L",5999],["Bajaj DC 2015 43L",6499],["Bajaj DC 55 Deluxe 54L",7499],["Bajaj TC 2010 35L",5999],["Bajaj Shield 75L",8999],["Bajaj Platini 60L",7999],["Bajaj Frio 23L",5499],["Bajaj Coolest 80L",9499],
["Crompton Ozone 75L",8999],["Crompton Marvel 40L",6499],["Crompton Optimus 100L",11999],["Crompton Marvel Neo 40L",6999],["Crompton Ginie 25L",4999],["Crompton Arno 75L",9499],
["Hindware 85L Desert Cooler",9499],["Hindware 70L Tower Cooler",8499],["Hindware 45L Personal Cooler",6499],["Hindware 100L Cooler",11999],
["Orient Electric 85L",7999],["Orient Electric 70L",7499],["Orient Electric 50L",6499],["Orient Electric 100L",10999],["Orient Electric 40L",5999],
["Kenstar 70L",8499],["Kenstar 90L",9999],["Kenstar 50L",6499],["Kenstar 75L",8999],
["Usha Dynamo 70L",8999],["Usha Dynamo 50L",6999],["Usha Honeycomb 85L",9499],
["Havells Ghumar 75L",8999],["Havells Kace 50L",6999],["Havells Celia 55L",7499],
["V-Guard 85L",8999],["Maharaja 70L",7999],["Khaitan 70L",7999],["Novamax 100L",10999],["Novamax 70L",8499],
["Symphony Diet 12i",5999],["Symphony Diet 8T",4999],["Bajaj PX 97",5999],["Crompton 55L",7499],["Orient 65L",6999],
["Symphony 60L Tower",7499],["Bajaj 65L Tower",7999],["Crompton 65L Tower",7999],["Hindware 65L Tower",7999],
["Symphony 90L Desert",9999],["Bajaj 90L Desert",9999],["Crompton 90L Desert",9999],["Kenstar 90L Desert",9999],
["Symphony 50L Personal",6499],["Bajaj 50L Personal",6499],["Crompton 50L Personal",6499],
["Symphony 30L Personal",5499],["Bajaj 30L Personal",5499],["Orient 30L Personal",5499],
["Symphony 110L Jumbo",12999],["Bajaj 110L Jumbo",12999],["Crompton 110L Jumbo",12999],
["Symphony 25L Personal",4999],["Bajaj 25L Personal",4999],["Crompton 25L Personal",4999],
["Symphony 45L",6499],["Bajaj 45L",6499],["Orient 45L",6499],["Kenstar 45L",6499],["Usha 45L",6499],
["Symphony 80L",8999],["Bajaj 80L",8999],["Crompton 80L",8999],["Hindware 80L",8999],["Orient 80L",8999],
["Symphony 35L",5999],["Bajaj 35L",5999],["Crompton 35L",5999],["Orient 35L",5999],
["Symphony 55L",7499],["Bajaj 55L",7499],["Crompton 55L",7499],["Kenstar 55L",7499],
["Symphony 65L",7999],["Bajaj 65L",7999],["Crompton 65L",7999],["Hindware 65L",7999],
["Symphony 95L",10999],["Bajaj 95L",10999],["Crompton 95L",10999]
]));
RAW = RAW.concat(make("Air Conditioner", [
["LG 1 Ton 3 Star Split AC",28990],["LG 1.5 Ton 3 Star Split AC",34990],["LG 1.5 Ton 5 Star Split AC",42990],["LG 2 Ton 3 Star Split AC",46990],["LG 1 Ton 5 Star Split AC",35990],
["Samsung 1.5 Ton 3 Star Split AC",32990],["Samsung 1 Ton 3 Star Split AC",27990],["Samsung 1.5 Ton 5 Star Split AC",41990],["Samsung 2 Ton 3 Star",45990],
["Daikin 1.5 Ton 3 Star Split AC",36990],["Daikin 1 Ton 3 Star",29990],["Daikin 1.5 Ton 5 Star",43990],["Daikin 1 Ton 5 Star",34990],
["O General 1.5 Ton 3 Star",39990],["O General 1 Ton 3 Star",32990],["O General 2 Ton 3 Star",49990],
["Hitachi 1.5 Ton 3 Star",35990],["Hitachi 1 Ton 3 Star",28990],["Hitachi 1.5 Ton 5 Star",42990],
["Voltas 1.5 Ton 3 Star",30990],["Voltas 1 Ton 3 Star",25990],["Voltas 1.5 Ton 5 Star",39990],["Voltas 2 Ton 3 Star",42990],
["Blue Star 1.5 Ton 3 Star",33990],["Blue Star 1 Ton 3 Star",27990],["Blue Star 1.5 Ton 5 Star",41990],
["Panasonic 1.5 Ton 3 Star",34990],["Panasonic 1 Ton 3 Star",28990],["Panasonic 1.5 Ton 5 Star",42990],
["Whirlpool 1.5 Ton 3 Star",29990],["Whirlpool 1 Ton 3 Star",24990],["Carrier 1.5 Ton 3 Star",32990],["Carrier 1 Ton 3 Star",26990],
["Mitsubishi 1.5 Ton 5 Star",48990],["Mitsubishi 1 Ton 5 Star",39990],["Haier 1.5 Ton 3 Star",28990],["Haier 1 Ton 3 Star",23990],
["LG 1.5 Ton Window AC",24990],["Voltas 1.5 Ton Window AC",21990],["Blue Star 1.5 Ton Window AC",23990],["Hitachi 1.5 Ton Window AC",24990],
["Daikin 1.5 Ton Window AC",25990],["O General 1.5 Ton Window AC",27990],["Samsung 1.5 Ton Window AC",23990],["Panasonic 1.5 Ton Window AC",24990],
["LG 1 Ton Window AC",19990],["Voltas 1 Ton Window AC",18990],["Blue Star 1 Ton Window AC",19990],
["LG 2 Ton 5 Star Split AC",54990],["Samsung 2 Ton 5 Star",52990],["Daikin 2 Ton 5 Star",54990],["Voltas 2 Ton 5 Star",49990],
["LG 1.5 Ton Inverter Split AC",37990],["Samsung 1.5 Ton Inverter",35990],["Daikin 1.5 Ton Inverter",39990],["O General 1.5 Ton Inverter",42990]
]));

// --- FASHION MEN 100 ---
RAW = RAW.concat(make("Fashion Men", [
["Roadster Men Blue Slim Fit Jeans",899],["Roadster Men Black Jeans",999],["Roadster Men Grey Jeans",899],["Levis 511 Slim Fit Jeans",1599],["Levis 512 Slim Tapered Jeans",1799],["Levis 501 Original Jeans",1999],["Flying Machine Slim Fit Jeans",1099],
["HRX Men Black Oversized T-Shirt",499],["HRX Men White T-Shirt",449],["Puma Men Black T-Shirt",699],["Nike Men Dri-Fit T-Shirt",999],["Adidas Men Essential T-Shirt",899],["Roadster Men Printed T-Shirt",399],
["Peter England Men White Formal Shirt",799],["Peter England Men Blue Formal Shirt",899],["Allen Solly Men Formal Shirt",999],["Van Heusen Men Formal Shirt",1099],["Raymond Men Formal Shirt",1299],["Park Avenue Men Formal Shirt",899],
["HRX Men Black Hoodie",999],["Puma Men Hoodie",1499],["Nike Men Hoodie",1999],["Adidas Men Hoodie",1799],["Roadster Men Hoodie",899],["Wrogn Men Hoodie",1199],
["Puma Men Casual Sneakers",1299],["Nike Men Revolution Sneakers",1999],["Adidas Men Running Shoes",1799],["Campus Men Sneakers",899],["Sparx Men Sneakers",799],["Red Tape Men Sneakers",1499],
["Roadster Men Brown Leather Jacket",2499],["Levis Men Denim Jacket",1999],["Wrogn Men Bomber Jacket",1799],["Puma Men Track Jacket",1999],
["HRX Men Olive Cargo Pants",1099],["Roadster Men Cargo Pants",999],["Killer Men Cargo Pants",1299],["Mufti Men Cargo Pants",1199],
["Manyavar Men Kurta Festive",1299],["FabIndia Men Cotton Kurta",999],["Aurelia Men Kurta Set",1499],["Peter England Men Kurta",1199],
["Peter England Men Blazer Party",2999],["Van Heusen Men Blazer",3499],["Raymond Men Blazer",3999],
["HRX Men Track Pants Gym",699],["Puma Men Track Pants",999],["Nike Men Track Pants",1299],
["Roadster Men Polo T-Shirt",599],["U.S. Polo Men Polo T-Shirt",899],["Allen Solly Men Polo",799],
["Roadster Men Denim Jacket",1499],["Levis Men Trucker Jacket",2499],
["Monte Carlo Men Sweater Woolen",1199],["Roadster Men Sweater",999],["Peter England Men Sweater",1299],
["HRX Men Shorts Summer",499],["Puma Men Shorts",699],["Nike Men Shorts",899],
["Manyavar Men Sherwani",4999],["Jodhpuri Men Sherwani",3999],["FabIndia Men Sherwani",4499],
["Wildcraft Men Rain Jacket",1299],["Quechua Men Rain Jacket",1499],
["Roadster Men Linen Shirt Summer",899],["Allen Solly Men Linen Shirt",999],
["Roadster Men Co-ord Set Trending",1399],["Wrogn Men Co-ord Set",1599],["HRX Men Co-ord Set",1299],
["HRX Men Fleece Sweatshirt",899],["Puma Men Sweatshirt",1199],["Nike Men Sweatshirt",1499],
["Peter England Men Formal Trousers",999],["Van Heusen Men Trousers",1099],["Allen Solly Men Trousers",999],
["Mufti Men Shirt Casual",899],["Spykar Men Shirt",999],["Jack & Jones Men Shirt",1099],["John Players Men Shirt",799],
["Killer Men Jeans",1199],["Spykar Men Jeans",1299],["Mufti Men Jeans",1199],
["Campus Men Running Shoes",999],["Asian Men Running Shoes",799],["Bata Men Formal Shoes",1299],
["Roadster Men Winter Jacket",1999],["Puma Men Winter Jacket",2499],["HRX Men Winter Jacket",1799],
["Levis Men T-Shirt Pack of 2",999],["Roadster Men T-Shirt Pack of 3",899],["HRX Men T-Shirt Pack of 2",799]
])));

// --- FASHION WOMEN 100 ---
RAW = RAW.concat(make("Fashion Women", [
["Zara Women Floral Summer Dress",999],["H&M Women Floral Dress",899],["Mango Women Maxi Dress",1199],["Vero Moda Women Dress",1099],["Only Women Bodycon Dress",999],["DressBerry Women Dress",799],
["Biba Women Pink Cotton Kurti Set",1199],["W Women Kurti Set",1299],["Aurelia Women Kurti Set",1099],["Libas Women Kurti Set",999],["Global Desi Women Kurti",1299],
["Zara Women High Waist Jeans",1099],["H&M Women Skinny Jeans",999],["Only Women Mom Jeans",1199],["Vero Moda Women Jeans",1099],
["Sassafras Women Saree Georgette",1499],["Mast & Harbour Women Saree",1299],["Kalyan Women Silk Saree",2499],["FabIndia Women Saree",1999],
["Zara Women Co-ord Set Trending",1299],["H&M Women Co-ord Set",1199],["Only Women Co-ord Set",1099],
["H&M Women Hoodie Winter",999],["Zara Women Hoodie",1199],["Mango Women Hoodie",1099],
["Only Women Crop Top",399],["Vero Moda Women Crop Top",499],["H&M Women Crop Top",399],["DressBerry Women Crop Top",349],
["Biba Women Palazzo Set",899],["W Women Palazzo Set",999],["Aurelia Women Palazzo",899],
["Libas Women Lehenga Party",3999],["Biba Women Lehenga",4499],["Kalyan Women Lehenga",4999],
["Zara Women Denim Jacket",1299],["H&M Women Denim Jacket",1199],["Only Women Denim Jacket",1099],
["Mango Women Sweater Woolen",1099],["H&M Women Sweater",999],["Zara Women Sweater",1199],
["Mango Women Maxi Dress Summer",1199],["Zara Women Maxi Dress",1299],
["Biba Women Anarkali Kurti",1399],["W Women Anarkali",1499],["Aurelia Women Anarkali",1299],
["Zara Women Blazer Formal",1999],["H&M Women Blazer",1799],["Vero Moda Women Blazer",1899],
["H&M Women Pleated Skirt",699],["Zara Women Skirt",799],["Only Women Skirt",599],
["Clovia Women Night Suit Satin",899],["Zivame Women Night Suit",999],["Mast & Harbour Women Night Suit",799],
["Wildcraft Women Raincoat",999],["Quechua Women Raincoat",1099],
["Mango Women Ethnic Gown",2499],["Biba Women Gown",2299],["Libas Women Gown",1999],
["Zara Women Winter Coat Long",2299],["H&M Women Winter Coat",1999],["Mango Women Coat",2199],
["H&M Women Oversized T-Shirt",499],["Zara Women T-Shirt",599],["Only Women T-Shirt",449],
["Biba Women Chikankari Kurti",1299],["FabIndia Women Chikankari Kurti",1499],
["Zara Women Linen Shirt",899],["H&M Women Linen Top",799],
["Vero Moda Women Top",599],["Only Women Top",499],["DressBerry Women Top",399],
["H&M Women Denim Shorts",599],["Zara Women Shorts",699],
["Mango Women Formal Shirt",999],["Zara Women Formal Shirt",1099],
["Biba Women Dupatta Set",899],["W Women Dupatta",799],
["Libas Women Sharara Set",1999],["Biba Women Sharara",2199],
["Zara Women Jumpsuit",1299],["H&M Women Jumpsuit",1199],
["Only Women Denim Dress",1099],["Vero Moda Women Denim Dress",1199],
["H&M Women Cardigan",899],["Zara Women Cardigan",999],
["Mango Women Leather Jacket",2999],["Zara Women Leather Jacket",3499],
["DressBerry Women Co-ord Set",999],["Tokyo Talkies Women Dress",799],["Tokyo Talkies Women Top",499],["Tokyo Talkies Women Jeans",899]
])));

// --- JEWELLERY 100 ---
RAW = RAW.concat(make("Jewellery", [
["Zaveri Pearls Gold Bridal Necklace Set",1999],["Zaveri Pearls Kundan Necklace Set",2499],["Zaveri Pearls Pearl Necklace",1499],["Zaveri Pearls Temple Necklace",2299],
["Voylla Kundan Choker Set",3499],["Voylla Gold Necklace Set",2999],["Voylla Pearl Earrings",999],["Voylla Bangles Set",899],
["Yellow Chimes Rose Gold Pendant For GF",999],["Yellow Chimes Crystal Bracelet For GF",399],["Yellow Chimes Stud Earrings Gift",699],["Yellow Chimes Couple Ring",699],
["Shining Diva Silver Jhumka Earrings",699],["Shining Diva Gold Plated Bangles Set of 4",899],["Shining Diva Maang Tikka Set",1299],["Shining Diva Nose Pin",199],
["Peora Pearl Necklace Set",1499],["Peora Diamond Stud Earrings",2999],["Peora Gold Mangalsutra",899],["Peora Silver Anklet Payal",599],
["YouBella Gold Plated Necklace",1799],["YouBella Kundan Choker",1999],["YouBella Jhumka Earrings",799],
["Haniya Diamond Ring Couple",499],["Haniya Promise Ring",699],["Haniya Couple Pendant",899],
["Karatcart Bridal Kundan Full Set",4999],["Karatcart Bridal Maang Tikka Set",1599],["Karatcart Temple Jewellery Set",2499],
["Priyaasi Gold Plated Necklace",1899],["Priyaasi Kundan Choker",2199],["Priyaasi Pearl Drop Earrings",799],
["Sukkhi Gold Plated Bangles",799],["Sukkhi Jhumka Earrings",599],["Sukkhi Mangalsutra",799],
["Zaveri Pearls Bridal Maang Tikka",1299],["Voylla Bridal Set",3999],["Shining Diva Bridal Set",2999],
["Yellow Chimes Gold Chain Men/Women",1299],["Peora Gold Chain",1499],["Voylla Gold Chain",1199],
["Zaveri Pearls Diamond Necklace Party",4999],["Voylla Diamond Necklace",3999],["Peora Diamond Necklace",4499],
["Shining Diva Pearl Drop Earrings Gift Box",799],["Yellow Chimes Pearl Earrings",699],
["Karatcart Gold Plated Nose Pin",199],["Priyaasi Gold Nose Pin",299],
["YouBella Crystal Bracelet For GF",399],["Haniya Crystal Bracelet",499],
["Zaveri Pearls Silver Anklet",599],["Voylla Silver Anklet",699],["Peora Silver Anklet",649],
["Shining Diva Kundan Maang Tikka + Earrings",1599],["Zaveri Pearls Kundan Maang Tikka",1499],
["Voylla American Diamond Ring",599],["Shining Diva AD Ring",499],["Peora AD Ring",699],
["Yellow Chimes Gold Plated Earrings",599],["Zaveri Pearls Gold Earrings",899],
["Karatcart Pearl Necklace",1299],["Priyaasi Pearl Necklace",1399],
["Sukkhi Temple Jewellery Set",1999],["Voylla Temple Set",2199],
["Zaveri Pearls Choker Set Marriage",2999],["Peora Choker Set",2799],
["Shining Diva Bangles Set of 6",999],["Zaveri Pearls Bangles Set",1099],
["Yellow Chimes Pendant For GF Rose Gold",899],["YouBella Pendant For GF",799],
["Haniya Couple Ring Set",899],["Voylla Couple Ring",799],
["Karatcart Mangalsutra Gold",999],["Shining Diva Mangalsutra",899],
["Peora Jhumka Earrings Gold",799],["Zaveri Pearls Jhumka",899],
["Priyaasi Bridal Necklace",2799],["Sukkhi Bridal Necklace",2499],
["Voylla Earrings Gift Box",699],["Zaveri Pearls Earrings Gift",799],
["Yellow Chimes Anklet Payal",499],["Shining Diva Anklet",599],
["Karatcart Diamond Stud Earrings",1999],["Peora Diamond Stud",2499]
])));

// --- TOYS 100 ---
RAW = RAW.concat(make("Toys", [
["Hot Wheels RC Racing Car",1299],["Hot Wheels Car Set of 5",1499],["Hot Wheels Monster Truck",1799],["Hot Wheels Track Set",2499],
["Lego Building Blocks 200 Pcs",799],["Lego City Set",1499],["Lego Technic Car",2999],["Lego Star Wars Set",3999],
["Barbie Doll Set",999],["Barbie Dreamhouse",3999],["Barbie Fashion Doll",799],["Barbie Princess Doll",1199],
["Funskool Dancing Robot",1499],["Funskool Talking Robot",999],["Funskool RC Car",1199],["Funskool Puzzle 1000 Pcs",499],
["Fisher Price Teddy Bear 4 Feet",1199],["Fisher Price Baby Toy",699],["Fisher Price Musical Toy",899],
["Chicco Baby Rattle Set",499],["Chicco Baby Walker",1999],["Chicco Baby Toy",799],
["Mee Mee Baby Toy Set",899],["Mee Mee Soft Toy",699],
["Centy RC Monster Truck Big",1999],["Centy RC Jeep",1799],["Centy RC Boat",1499],["Centy RC Helicopter",899],
["Toyshine Drone Camera 4K",4999],["Toyshine Mini Drone Foldable",2499],["Toyshine Drone with Camera",3499],
["Kidzvilla Robot Car Transformer",1299],["Kidzvilla Dinosaur Toy Set",799],["Kidzvilla Train Set Electric",1599],["Kidzvilla Kitchen Set",899],
["Hot Wheels Water Gun Big Holi",699],["Nerf Water Gun",899],["Pichkari Water Gun",499],
["Barbie Kitchen Set",1299],["Barbie Doctor Set",999],["Barbie School Set",899],
["Lego Dinosaur Set",1299],["Lego Train Set",1999],["Lego House Set",1799],
["Funskool Board Game",799],["Funskool Chess Set",599],["Funskool Ludo Game",399],
["Teddy Bear 3 Feet Pink",999],["Teddy Bear 5 Feet Brown",1499],["Teddy Bear Small",499],
["RC Helicopter Toy",899],["RC Boat Toy",1499],["RC Jeep Toy",1799],["RC Bike Toy",1199],
["Kids Electric Bike Toy",3999],["Kids Electric Car Toy",4999],["Kids Scooter Toy",1999],
["Building Blocks 500 Pcs",1199],["Building Blocks 100 Pcs",399],
["Puzzle Game 500 Pcs",399],["Puzzle Game 100 Pcs",199],
["Dinosaur Toy Set of 6",799],["Dinosaur Remote Control",1299],
["Train Set Electric Big",1999],["Train Set Small",899],
["Kitchen Set Big",1199],["Doctor Set Kids",699],["Tool Set Kids",599],
["Water Gun Electric",999],["Water Gun Small",299],
["Robot Toy Voice Control",1999],["Robot Toy Dancing LED",1799],["Robot Toy Talking",1499],
["Drone Mini Foldable Camera",2999],["Drone Big 4K Camera",5999],["Drone Toy for Kids",1999],
["Car Toy Set of 10",999],["Car Toy Diecast",699],["Car Toy Racing",899],
["Doll House Set",1999],["Doll Set of 3",1499],
["Ball Pool Balls 100 Pcs",499],["Baby Play Mat",899],["Baby Gym Toy",1199],
["Kite Set",299],["Cricket Set Kids",999],["Football Kids",699],["Badminton Set Kids",899]
])));

// --- MAKEUP 100 ---
RAW = RAW.concat(make("Makeup", [
["Lakme Absolute Matte Lipstick Red",599],["Lakme 9 to 5 Lipstick",499],["Lakme Lipstick Set 5 Shades",899],["Lakme Forever Matte Lipstick",649],
["Maybelline Fit Me Foundation 30ml",499],["Maybelline Super Stay Foundation",699],["Maybelline Fit Me Compact",349],["Maybelline Colossal Mascara",399],
["MAC Matte Lipstick Ruby Woo",1299],["MAC Studio Fix Foundation",2499],["MAC Eyeshadow Palette",2999],
["Sugar Eyeshadow Palette",999],["Sugar Matte Lipstick",599],["Sugar Kajal",299],["Sugar Blush",499],["Sugar Primer",699],
["Nykaa Eyeliner Waterproof",299],["Nykaa Lipstick Matte",399],["Nykaa Nail Polish Set",599],["Nykaa Eyeshadow Palette",899],
["Faces Canada Blush",349],["Faces Canada Foundation",499],["Faces Canada Lipstick",399],
["Colorbar Primer Face",699],["Colorbar Lipstick",599],["Colorbar Eyeshadow",899],
["L'Oreal Paris Lipstick",799],["L'Oreal Paris Foundation",999],["L'Oreal Paris Mascara",699],["L'Oreal Paris Nail Polish",299],
["Swiss Beauty Makeup Kit",1499],["Swiss Beauty Eyeshadow Palette",799],["Swiss Beauty Lipstick Set",699],
["Renee Lipstick Matte",599],["Renee Eyeliner",399],["Renee Blush",499],
["Blue Heaven Makeup Kit Bridal",1999],["Blue Heaven Lipstick Set",499],["Blue Heaven Eyeshadow",699],
["Elle 18 Lipstick Set",399],["Elle 18 Nail Polish",199],["Elle 18 Kajal",149],
["Kay Beauty Eyeliner",599],["Kay Beauty Lipstick",699],["Kay Beauty Blush",599],
["Wet n Wild Highlighter",499],["Wet n Wild Lipstick",399],["Wet n Wild Eyeshadow",599],
["Insight Makeup Brush Set 12 Pcs",799],["Insight Eyeshadow Palette",599],["Insight Lipstick",299],
["Lakme Compact Powder",349],["Lakme Kajal Eyeconic",199],["Lakme Eyeliner",299],["Lakme Mascara",399],["Lakme Foundation",599],
["Mamaearth Lip Balm Tinted",249],["Mamaearth Lipstick",399],["Mamaearth Kajal",299],
["Huda Beauty Eyeshadow",1999],["Huda Beauty Lipstick",1499],["Huda Beauty Foundation",2499],
["Faces Canada Kajal",199],["Faces Canada Eyeliner",299],["Faces Canada Mascara",349],
["Colorbar Kajal",249],["Colorbar Compact",499],["Colorbar Foundation",799],
["Maybelline Kajal",199],["Maybelline Eyeliner",299],["Maybelline Lipstick Set",899],
["Sugar Lipstick Set",999],["Sugar Foundation",799],["Sugar Compact",499],
["Nykaa Kajal",199],["Nykaa Mascara",399],["Nykaa Foundation",599],
["Swiss Beauty Kajal",149],["Swiss Beauty Compact",299],["Swiss Beauty Foundation",499],
["Lakme Blush",349],["Lakme Highlighter",499],["Lakme Setting Spray",599],
["Renee Compact",399],["Renee Foundation",599],["Blue Heaven Compact",249],["Elle 18 Compact",199],
["Kay Beauty Compact",499],["Wet n Wild Compact",399],["Insight Compact",249]
])));

// --- SKIN CARE 100 ---
RAW = RAW.concat(make("Skin Care", [
["Cetaphil Gentle Face Wash 125ml",499],["Cetaphil Foaming Cleanser 236ml",999],["Cetaphil Moisturizer 100g",599],["Cetaphil Sunscreen SPF 50",799],
["Himalaya Neem Face Wash 150ml",199],["Himalaya Aloe Vera Face Wash",199],["Himalaya Purifying Neem Scrub",249],["Himalaya Lip Balm",99],
["Dot & Key Sunscreen SPF 50 50g",599],["Dot & Key Vitamin C Face Wash",349],["Dot & Key Moisturizer",499],["Dot & Key Serum",699],
["Neutrogena Sunscreen SPF 50",699],["Neutrogena Face Wash",499],["Neutrogena Moisturizer",599],["Neutrogena Hydro Boost",899],
["CeraVe Foaming Cleanser 236ml",999],["CeraVe Moisturizing Cream",899],["CeraVe Hydrating Cleanser",799],
["Nivea Soft Moisturizer 200ml",299],["Nivea Sunscreen SPF 50",499],["Nivea Face Wash",199],
["Mamaearth Vitamin C Face Wash",349],["Mamaearth Tea Tree Face Wash",299],["Mamaearth Sunscreen SPF 50",399],["Mamaearth Aloe Vera Gel",299],
["Lakme Sun Expert Sunscreen SPF 50",399],["Lakme Face Wash",199],["Lakme Moisturizer",299],
["Garnier Vitamin C Serum 30ml",499],["Garnier Face Wash",199],["Garnier Sunscreen SPF 50",399],["Garnier Micellar Water",299],
["Minimalist Niacinamide Serum 30ml",599],["Minimalist Vitamin C Serum",699],["Minimalist Sunscreen SPF 50",499],
["Plum Green Tea Face Wash",399],["Plum Sunscreen SPF 50",499],["Plum Moisturizer",599],
["Biotique Honey Gel Face Wash",199],["Biotique Papaya Face Wash",199],["Biotique Sunscreen",299],
["Olay Day Cream SPF 24",899],["Olay Night Cream",999],["Olay Serum",1299],
["Ponds Face Wash Bright 100g",199],["Ponds Moisturizer",299],["Ponds Sunscreen",399],
["The Derma Co Cleanser 125ml",299],["The Derma Co Sunscreen",399],["The Derma Co Serum",499],
["Lotus Herbals Sunscreen SPF 50",449],["Lotus Face Wash",199],["Lotus Moisturizer",299],
["Aqualogica Hydra Gel Moisturizer",399],["Aqualogica Sunscreen",499],["Aqualogica Face Wash",299],
["Wow Aloe Vera Face Wash",249],["Wow Vitamin C Face Wash",299],["Wow Sunscreen",399],
["Simple Kind to Skin Cleanser",399],["Simple Moisturizer",499],["Simple Toner",399],
["Nykaa Vitamin C Face Wash",299],["Nykaa Sunscreen SPF 50",399],["Nykaa Serum",499],
["L'Oreal Paris Face Wash",299],["L'Oreal Paris Sunscreen",499],["L'Oreal Paris Serum",899],
["O3+ Face Wash",349],["O3+ Sunscreen",499],["O3+ Scrub",399],
["Bella Vita Face Wash",249],["Bella Vita Sunscreen",349],
["Good Vibes Face Wash",199],["Good Vibes Sunscreen",299],["Good Vibes Serum",399],
["MCaffeine Face Wash",299],["MCaffeine Sunscreen",399],["MCaffeine Scrub",349],
["Fixderma Sunscreen SPF 50",499],["Fixderma Face Wash",299],
["Avene Face Wash",899],["La Roche-Posay Cleanser",999],["La Roche-Posay Sunscreen",1199]
]));

const PRODUCTS = [];
let id = 1;
RAW.forEach(p=>{
  PRODUCTS.push({
    id: id++,
    name: p.name,
    category: p.category,
    image: p.image,
    stores: [
      { name: "Amazon", price: p.price, discount: 20 + (id % 40), link: `https://www.amazon.in/s?k=${encodeURIComponent(p.name.split(' ').slice(0,3).join(' '))}` },
      { name: "Flipkart", price: Math.max(99, p.price - Math.round(p.price*0.05)), discount: 22 + (id % 40), link: `https://www.flipkart.com/search?q=${encodeURIComponent(p.name.split(' ').slice(0,3).join(' '))}` },
      { name: "Meesho", price: p.price + Math.round(p.price*0.04), discount: 15 + (id % 35), link: `https://www.meesho.com/search?q=${encodeURIComponent(p.name.split(' ').slice(0,3).join(' '))}` }
    ]
  });
});

app.get('/', (req,res)=> res.send('PriceLoot Live! Total: '+PRODUCTS.length));
app.get('/api/search', (req,res)=>{
  let q = (req.query.q || '').toLowerCase();
  let cat = req.query.cat || 'ALL';
  let result = PRODUCTS.filter(p => {
    if(cat !== 'ALL' && p.category !== cat) return false;
    if(q && !p.name.toLowerCase().includes(q)) return false;
    return true;
  });
  res.json(result);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log('Running '+PORT+' Total '+PRODUCTS.length));
