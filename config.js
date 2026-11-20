const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// 600 DIFFERENT products per category - No Repeat
function generate(category, brands, types, features, sizes, basePrice) {
  let out = [];
  let count = 0;
  let modelNo = 1001;
  for (let b = 0; b < brands.length && count < 600; b++) {
    for (let t = 0; t < types.length && count < 600; t++) {
      for (let f = 0; f < features.length && count < 600; f++) {
        for (let s = 0; s < sizes.length && count < 600; s++) {
          // Every name is UNIQUE because of Model No.
          let name = `${brands[b]} ${types[t]} - ${features[f]} - ${sizes[s]} - Model ${modelNo}`;
          let price = basePrice + (count * 37 % 5000) + (b * 111) + (t * 73);
          let discount = 25 + (count % 50); // 25% to 74%
          out.push([name, category, price, discount]);
          count++; modelNo++;
        }
      }
    }
  }
  return out;
}

let RAW = [];
RAW = RAW.concat(generate("Mobile",
  ["Samsung","Apple","Redmi","Realme","Vivo","Oppo","OnePlus","Poco","Nothing","Motorola"],
  ["Galaxy M34","iPhone 15","Note 13 Pro","12 Pro","V30","Reno 11","Nord CE4","Z9","Phone 2a","Pixel 8a"],
  ["5G 8GB RAM","5G 12GB RAM","4G 6GB RAM","5G 256GB","Pro Camera","Gaming Edition","Long Battery","Fast Charging"],
  ["128GB","256GB","512GB","64GB"], 9999));

RAW = RAW.concat(generate("Earbuds",
  ["boAt","Noise","Realme","OnePlus","Samsung","Apple","JBL","Sony","pTron","Mivi"],
  ["Airdopes 141","Buds VS104","Buds T300","Nord Buds 2","Galaxy Buds2","AirPods 2","Tune 130NC","WF-C500","Bassbuds","DuoPods"],
  ["ANC Noise Cancellation","Deep Bass","Wireless Charging","Waterproof IPX5","Long Battery 40H","Bluetooth 5.3","ENC Mic","Gaming Mode"],
  ["Black","White","Blue","Green"], 799));

RAW = RAW.concat(generate("Watch",
  ["Noise","Fire-Boltt","boAt","Fastrack","Titan","Amazfit","Samsung","Apple","Realme","Fossil"],
  ["ColorFit Pro 5","360 Smartwatch","Wave Call 2","Revoltt FS1","Smart 3","GTS 4 Mini","Watch 6","Watch SE 2","Watch S100","Gen 6"],
  ["AMOLED Display","Bluetooth Calling","SpO2 + Heart","GPS Tracking","Waterproof","Fitness Pro","Metal Strap","Sport Edition"],
  ["Black","Silver","Gold","Blue"], 1299));

RAW = RAW.concat(generate("Headphones",
  ["Sony","JBL","boAt","Noise","Zebronics","Apple","OnePlus","Realme","Infinity","Anker"],
  ["WH-CH520","Tune 760NC","Rockerz 450","Two Headphones","Zeb-Thunder","AirPods Max","Bullets Z2","Buds Wireless 3","Glide 500","Soundcore Q20"],
  ["ANC","Wireless Bluetooth","40H Battery","Foldable","Bass Boost","Mic + Gaming","Hi-Fi Sound","Noise Isolation"],
  ["Black","White","Blue","Red"], 999));

RAW = RAW.concat(generate("Fridge",
  ["LG","Samsung","Whirlpool","Haier","Godrej","Panasonic","Bosch","Hitachi","Hisense","Voltas"],
  ["Double Door","Single Door","Convertible 5in1","Side by Side","Triple Door","Frost Free","Inverter","Smart Connect"],
  ["242L","236L","235L","190L","180L","322L","320L","307L"],
  ["Silver","Steel","Black","White"], 13990));

RAW = RAW.concat(generate("Air Cooler",
  ["Symphony","Bajaj","Crompton","Hindware","Orient","Kenstar","Usha","Havells","V-Guard","Maharaja"],
  ["Desert Cooler","Tower Cooler","Personal Cooler","Window Cooler","Portable Cooler","Honeycomb Pad","Turbo Fan","Silent Cooler"],
  ["75L","85L","70L","55L","40L","110L","90L","50L"],
  ["White","Grey","Blue","Black"], 4999));

RAW = RAW.concat(generate("Fashion Men",
  ["Roadster","HRX","Puma","Nike","Adidas","Levis","Peter England","Allen Solly","Van Heusen","Flying Machine"],
  ["Slim Fit Jeans","Oversized T-Shirt","Formal Shirt","Hoodie","Casual Sneakers","Leather Jacket","Cargo Pants","Kurta","Blazer","Track Pants"],
  ["Cotton","Denim","Linen","Woolen","Polyester","Fleece","Stretch","Premium"],
  ["S","M","L","XL"], 499));

RAW = RAW.concat(generate("Fashion Women",
  ["Zara","H&M","Biba","W","Aurelia","Global Desi","Only","Vero Moda","Mango","FabIndia"],
  ["Floral Dress","Oversized T-Shirt","High Waist Jeans","Kurti Set","Saree","Co-ord Set","Hoodie","Crop Top","Palazzo Set","Lehenga"],
  ["Cotton","Georgette","Silk","Chiffon","Denim","Crepe","Satin","Net"],
  ["S","M","L","XL"], 399));

RAW = RAW.concat(generate("Jewellery",
  ["Zaveri Pearls","Voylla","Yellow Chimes","Shining Diva","Peora","YouBella","Haniya","Karatcart","Priyaasi","Sukkhi"],
  ["Necklace Set","Stud Earrings","Kundan Choker","Pendant","Jhumka","Pearl Necklace","Bangles Set","Temple Set","Diamond Ring","Maang Tikka"],
  ["Bridal","Gift For GF","Marriage","Party Wear","Daily Wear","Festive","Engagement","Anniversary"],
  ["Gold","Rose Gold","Silver","Pearl"], 199));

RAW = RAW.concat(generate("Toys",
  ["Hot Wheels","Lego","Barbie","Funskool","Fisher Price","Chicco","Mee Mee","Centy","Toyshine","Kidzvilla"],
  ["Racing Car RC","Dancing Robot","Drone Camera","Monster Truck","Talking Robot","Mini Drone","Jeep RC","Transformer Car","Helicopter","Electric Bike"],
  ["Remote Control","Camera 4K","Voice Control","LED Light","Rechargeable","Big Size","Foldable","Educational"],
  ["Red","Blue","Green","Yellow"], 499));

RAW = RAW.concat(generate("Makeup",
  ["Lakme","Maybelline","MAC","Sugar","Nykaa","Faces Canada","Colorbar","L'Oreal","Swiss Beauty","Renee"],
  ["Lipstick Set","Foundation","Matte Lipstick","Eyeshadow Palette","Eyeliner","Kajal","Mascara","Makeup Kit","Blush","Nail Polish"],
  ["Matte Finish","Waterproof","Long Lasting","HD Glow","Oil Free","Smudge Proof","Vegan","Bridal Kit"],
  ["Red","Pink","Nude","Brown"], 199));

RAW = RAW.concat(generate("Skin Care",
  ["Cetaphil","Himalaya","Dot & Key","Neutrogena","CeraVe","Nivea","Mamaearth","Lakme","Garnier","Minimalist"],
  ["Face Wash","Sunscreen","Foaming Cleanser","Moisturizer","Vitamin C Serum","Niacinamide Serum","Face Scrub","Night Cream","Toner","Day Cream"],
  ["Aloe Vera","Vitamin C","Neem","Rose","Tea Tree","Honey","Charcoal","Cucumber"],
  ["100ml","200ml","150ml","250ml"], 199));

const PRODUCTS = RAW.map((r,i)=>{
  // UNIQUE IMAGE - Shows product name on image, never repeats
  let imgText = encodeURIComponent(r[0].substring(0,35));
  return {
    id: i+1,
    name: r[0],
    category: r[1],
    image: `https://placehold.co/400x300/1e1e2e/facc15?text=${imgText}`,
    stores: [
      { name: "Amazon", price: r[2], discount: r[3], link: `https://www.amazon.in/s?k=${encodeURIComponent(r[0].split(' - ')[0] + ' ' + r[0].split(' ')[1])}` },
      { name: "Flipkart", price: Math.max(99, r[2]-Math.round(r[2]*0.05)), discount: r[3]+2, link: `https://www.flipkart.com/search?q=${encodeURIComponent(r[0].split(' - ')[0])}` },
      { name: "Meesho", price: r[2]+Math.round(r[2]*0.04), discount: Math.max(10, r[3]-10), link: `https://www.meesho.com/search?q=${encodeURIComponent(r[0].split(' - ')[0])}` }
    ]
  };
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
  res.json(result.slice(0,50));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log('Running '+PORT+' Total '+PRODUCTS.length));
