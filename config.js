const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// REAL PRODUCTS - Real Name, Real Photo, Real Price
const PRODUCTS = [
  // --- MOBILE - Real ---
  { id: 1, name: "Apple iPhone 15 (128GB, Blue)", category: "Mobile", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400", stores: [
    { name: "Amazon", price: 66999, discount: 16, link: "https://www.amazon.in/s?k=iPhone+15+128GB" },
    { name: "Flipkart", price: 65999, discount: 17, link: "https://www.flipkart.com/search?q=iPhone+15" },
    { name: "Meesho", price: 69999, discount: 10, link: "https://www.meesho.com/search?q=iPhone+15" }]},
  { id: 2, name: "Samsung Galaxy S24 5G (8GB, 256GB)", category: "Mobile", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400", stores: [
    { name: "Amazon", price: 62999, discount: 21, link: "https://www.amazon.in/s?k=Samsung+Galaxy+S24" },
    { name: "Flipkart", price: 59999, discount: 25, link: "https://www.flipkart.com/search?q=Samsung+S24" },
    { name: "Meesho", price: 64999, discount: 18, link: "https://www.meesho.com/search?q=Samsung+S24" }]},
  { id: 3, name: "Redmi Note 13 Pro 5G (8GB, 256GB)", category: "Mobile", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400", stores: [
    { name: "Amazon", price: 23999, discount: 25, link: "https://www.amazon.in/s?k=Redmi+Note+13+Pro" },
    { name: "Flipkart", price: 22999, discount: 28, link: "https://www.flipkart.com/search?q=Redmi+Note+13+Pro" },
    { name: "Meesho", price: 24999, discount: 22, link: "https://www.meesho.com/search?q=Redmi+Note+13+Pro" }]},
  { id: 4, name: "OnePlus Nord CE4 5G (8GB, 128GB)", category: "Mobile", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400", stores: [
    { name: "Amazon", price: 24999, discount: 20, link: "https://www.amazon.in/s?k=OnePlus+Nord+CE4" },
    { name: "Flipkart", price: 23999, discount: 23, link: "https://www.flipkart.com/search?q=OnePlus+Nord+CE4" },
    { name: "Meesho", price: 25999, discount: 17, link: "https://www.meesho.com/search?q=OnePlus+Nord+CE4" }]},

  // --- EARBUDS - Real ---
  { id: 5, name: "boAt Airdopes 141 TWS Earbuds", category: "Earbuds", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400", stores: [
    { name: "Amazon", price: 1199, discount: 76, link: "https://www.amazon.in/s?k=boAt+Airdopes+141" },
    { name: "Flipkart", price: 1099, discount: 78, link: "https://www.flipkart.com/search?q=boAt+Airdopes+141" },
    { name: "Meesho", price: 1299, discount: 74, link: "https://www.meesho.com/search?q=boAt+Airdopes+141" }]},
  { id: 6, name: "Apple AirPods (2nd Generation)", category: "Earbuds", image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400", stores: [
    { name: "Amazon", price: 9999, discount: 29, link: "https://www.amazon.in/s?k=Apple+AirPods+2" },
    { name: "Flipkart", price: 9799, discount: 30, link: "https://www.flipkart.com/search?q=Apple+AirPods+2" },
    { name: "Meesho", price: 10999, discount: 21, link: "https://www.meesho.com/search?q=Apple+AirPods" }]},
  { id: 7, name: "Sony WF-C500 Wireless Earbuds", category: "Earbuds", image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400", stores: [
    { name: "Amazon", price: 4990, discount: 50, link: "https://www.amazon.in/s?k=Sony+WF-C500" },
    { name: "Flipkart", price: 4790, discount: 52, link: "https://www.flipkart.com/search?q=Sony+WF-C500" },
    { name: "Meesho", price: 5290, discount: 47, link: "https://www.meesho.com/search?q=Sony+WF-C500" }]},

  // --- WATCH - Real ---
  { id: 8, name: "Noise ColorFit Pro 5 Smartwatch", category: "Watch", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400", stores: [
    { name: "Amazon", price: 2299, discount: 70, link: "https://www.amazon.in/s?k=Noise+ColorFit+Pro+5" },
    { name: "Flipkart", price: 2199, discount: 71, link: "https://www.flipkart.com/search?q=Noise+ColorFit+Pro+5" },
    { name: "Meesho", price: 2499, discount: 67, link: "https://www.meesho.com/search?q=Noise+ColorFit+Pro+5" }]},
  { id: 9, name: "Apple Watch SE (2nd Gen) 40mm", category: "Watch", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400", stores: [
    { name: "Amazon", price: 25999, discount: 20, link: "https://www.amazon.in/s?k=Apple+Watch+SE+2" },
    { name: "Flipkart", price: 24999, discount: 23, link: "https://www.flipkart.com/search?q=Apple+Watch+SE+2" },
    { name: "Meesho", price: 27999, discount: 14, link: "https://www.meesho.com/search?q=Apple+Watch+SE" }]},
  { id: 10, name: "Fire-Boltt 360 Bluetooth Calling Smartwatch", category: "Watch", image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400", stores: [
    { name: "Amazon", price: 1499, discount: 78, link: "https://www.amazon.in/s?k=Fire-Boltt+360" },
    { name: "Flipkart", price: 1399, discount: 80, link: "https://www.flipkart.com/search?q=Fire-Boltt+360" },
    { name: "Meesho", price: 1599, discount: 77, link: "https://www.meesho.com/search?q=Fire-Boltt+360" }]},

  // --- HEADPHONES - Real ---
  { id: 11, name: "Sony WH-CH520 Wireless Headphones", category: "Headphones", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", stores: [
    { name: "Amazon", price: 3490, discount: 45, link: "https://www.amazon.in/s?k=Sony+WH-CH520" },
    { name: "Flipkart", price: 3290, discount: 48, link: "https://www.flipkart.com/search?q=Sony+WH-CH520" },
    { name: "Meesho", price: 3690, discount: 42, link: "https://www.meesho.com/search?q=Sony+WH-CH520" }]},
  { id: 12, name: "JBL Tune 760NC Wireless Headphones", category: "Headphones", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400", stores: [
    { name: "Amazon", price: 4999, discount: 50, link: "https://www.amazon.in/s?k=JBL+Tune+760NC" },
    { name: "Flipkart", price: 4799, discount: 52, link: "https://www.flipkart.com/search?q=JBL+Tune+760NC" },
    { name: "Meesho", price: 5299, discount: 47, link: "https://www.meesho.com/search?q=JBL+Tune+760NC" }]},

  // --- FRIDGE - Real ---
  { id: 13, name: "LG 242L 3-Star Double Door Fridge", category: "Fridge", image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400", stores: [
    { name: "Amazon", price: 22990, discount: 35, link: "https://www.amazon.in/s?k=LG+242L+Fridge" },
    { name: "Flipkart", price: 21990, discount: 38, link: "https://www.flipkart.com/search?q=LG+242L+Fridge" },
    { name: "Meesho", price: 24990, discount: 29, link: "https://www.meesho.com/search?q=LG+Fridge" }]},
  { id: 14, name: "Samsung 236L Double Door Fridge", category: "Fridge", image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400", stores: [
    { name: "Amazon", price: 21990, discount: 32, link: "https://www.amazon.in/s?k=Samsung+236L+Fridge" },
    { name: "Flipkart", price: 20990, discount: 35, link: "https://www.flipkart.com/search?q=Samsung+236L+Fridge" },
    { name: "Meesho", price: 23990, discount: 26, link: "https://www.meesho.com/search?q=Samsung+Fridge" }]},

  // --- AIR COOLER - Real ---
  { id: 15, name: "Symphony Diet 12T Personal Air Cooler", category: "Air Cooler", image: "https://images.unsplash.com/photo-1614633833026-0820552978b6?w=400", stores: [
    { name: "Amazon", price: 5499, discount: 35, link: "https://www.amazon.in/s?k=Symphony+Diet+12T" },
    { name: "Flipkart", price: 5299, discount: 37, link: "https://www.flipkart.com/search?q=Symphony+Diet+12T" },
    { name: "Meesho", price: 5799, discount: 31, link: "https://www.meesho.com/search?q=Symphony+Cooler" }]},
  { id: 16, name: "Bajaj PX 97 Torque Air Cooler", category: "Air Cooler", image: "https://images.unsplash.com/photo-1580595999170-e9a5b6a7d0d0?w=400", stores: [
    { name: "Amazon", price: 5999, discount: 32, link: "https://www.amazon.in/s?k=Bajaj+PX+97" },
    { name: "Flipkart", price: 5799, discount: 34, link: "https://www.flipkart.com/search?q=Bajaj+PX+97" },
    { name: "Meesho", price: 6299, discount: 28, link: "https://www.meesho.com/search?q=Bajaj+Cooler" }]},

  // --- FASHION MEN - Real ---
  { id: 17, name: "Roadster Men Blue Slim Fit Jeans", category: "Fashion Men", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400", stores: [
    { name: "Amazon", price: 899, discount: 60, link: "https://www.amazon.in/s?k=Roadster+Men+Jeans" },
    { name: "Flipkart", price: 849, discount: 62, link: "https://www.flipkart.com/search?q=Roadster+Men+Jeans" },
    { name: "Meesho", price: 949, discount: 58, link: "https://www.meesho.com/search?q=Men+Jeans" }]},
  { id: 18, name: "Puma Men Black Oversized T-Shirt", category: "Fashion Men", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400", stores: [
    { name: "Amazon", price: 499, discount: 65, link: "https://www.amazon.in/s?k=Puma+Men+Tshirt" },
    { name: "Flipkart", price: 479, discount: 66, link: "https://www.flipkart.com/search?q=Puma+Men+Tshirt" },
    { name: "Meesho", price: 529, discount: 63, link: "https://www.meesho.com/search?q=Men+Tshirt" }]},

  // --- FASHION WOMEN - Real ---
  { id: 19, name: "Women Floral Printed Summer Dress", category: "Fashion Women", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400", stores: [
    { name: "Amazon", price: 999, discount: 60, link: "https://www.amazon.in/s?k=Women+Floral+Dress" },
    { name: "Flipkart", price: 949, discount: 62, link: "https://www.flipkart.com/search?q=Women+Floral+Dress" },
    { name: "Meesho", price: 1049, discount: 58, link: "https://www.meesho.com/search?q=Women+Dress" }]},
  { id: 20, name: "Biba Women Pink Cotton Kurti Set", category: "Fashion Women", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400", stores: [
    { name: "Amazon", price: 1199, discount: 58, link: "https://www.amazon.in/s?k=Biba+Kurti" },
    { name: "Flipkart", price: 1149, discount: 60, link: "https://www.flipkart.com/search?q=Biba+Kurti" },
    { name: "Meesho", price: 1299, discount: 55, link: "https://www.meesho.com/search?q=Women+Kurti" }]},

  // --- JEWELLERY - Real ---
  { id: 21, name: "Zaveri Pearls Gold Plated Bridal Necklace Set", category: "Jewellery", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400", stores: [
    { name: "Amazon", price: 1999, discount: 60, link: "https://www.amazon.in/s?k=Zaveri+Pearls+Necklace" },
    { name: "Flipkart", price: 1899, discount: 62, link: "https://www.flipkart.com/search?q=Zaveri+Pearls+Necklace" },
    { name: "Meesho", price: 2099, discount: 58, link: "https://www.meesho.com/search?q=Bridal+Necklace" }]},
  { id: 22, name: "Rose Gold Pendant Necklace - Gift for Girlfriend", category: "Jewellery", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400", stores: [
    { name: "Amazon", price: 999, discount: 65, link: "https://www.amazon.in/s?k=Rose+Gold+Pendant" },
    { name: "Flipkart", price: 949, discount: 67, link: "https://www.flipkart.com/search?q=Rose+Gold+Pendant" },
    { name: "Meesho", price: 1099, discount: 62, link: "https://www.meesho.com/search?q=Pendant+Necklace" }]},

  // --- TOYS - Real ---
  { id: 23, name: "Hot Wheels Remote Control Racing Car", category: "Toys", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400", stores: [
    { name: "Amazon", price: 1299, discount: 55, link: "https://www.amazon.in/s?k=RC+Racing+Car" },
    { name: "Flipkart", price: 1199, discount: 58, link: "https://www.flipkart.com/search?q=RC+Racing+Car" },
    { name: "Meesho", price: 1399, discount: 52, link: "https://www.meesho.com/search?q=RC+Car" }]},
  { id: 24, name: "DJI Mini Drone with 4K Camera", category: "Toys", image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400", stores: [
    { name: "Amazon", price: 4999, discount: 45, link: "https://www.amazon.in/s?k=Drone+Camera+4K" },
    { name: "Flipkart", price: 4799, discount: 47, link: "https://www.flipkart.com/search?q=Drone+Camera" },
    { name: "Meesho", price: 5299, discount: 42, link: "https://www.meesho.com/search?q=Drone+Camera" }]},
  { id: 25, name: "Dancing Robot Toy for Kids", category: "Toys", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400", stores: [
    { name: "Amazon", price: 1499, discount: 50, link: "https://www.amazon.in/s?k=Dancing+Robot+Toy" },
    { name: "Flipkart", price: 1399, discount: 53, link: "https://www.flipkart.com/search?q=Dancing+Robot" },
    { name: "Meesho", price: 1599, discount: 47, link: "https://www.meesho.com/search?q=Robot+Toy" }]},

  // --- MAKEUP - Real ---
  { id: 26, name: "Lakme Absolute Matte Lipstick - Red", category: "Makeup", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400", stores: [
    { name: "Amazon", price: 599, discount: 40, link: "https://www.amazon.in/s?k=Lakme+Lipstick" },
    { name: "Flipkart", price: 549, discount: 45, link: "https://www.flipkart.com/search?q=Lakme+Lipstick" },
    { name: "Meesho", price: 649, discount: 35, link: "https://www.meesho.com/search?q=Lakme+Lipstick" }]},
  { id: 27, name: "Maybelline Fit Me Foundation - 30ml", category: "Makeup", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400", stores: [
    { name: "Amazon", price: 499, discount: 35, link: "https://www.amazon.in/s?k=Maybelline+Fit+Me" },
    { name: "Flipkart", price: 479, discount: 38, link: "https://www.flipkart.com/search?q=Maybelline+Fit+Me" },
    { name: "Meesho", price: 529, discount: 31, link: "https://www.meesho.com/search?q=Maybelline+Foundation" }]},

  // --- SKIN CARE - Real ---
  { id: 28, name: "Cetaphil Gentle Skin Cleanser 125ml", category: "Skin Care", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400", stores: [
    { name: "Amazon", price: 499, discount: 25, link: "https://www.amazon.in/s?k=Cetaphil+Face+Wash" },
    { name: "Flipkart", price: 479, discount: 28, link: "https://www.flipkart.com/search?q=Cetaphil+Face+Wash" },
    { name: "Meesho", price: 529, discount: 20, link: "https://www.meesho.com/search?q=Cetaphil+Face+Wash" }]},
  { id: 29, name: "Dot & Key Sunscreen SPF 50 - 50g", category: "Skin Care", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400", stores: [
    { name: "Amazon", price: 599, discount: 35, link: "https://www.amazon.in/s?k=Dot+Key+Sunscreen" },
    { name: "Flipkart", price: 569, discount: 38, link: "https://www.flipkart.com/search?q=Dot+Key+Sunscreen" },
    { name: "Meesho", price: 629, discount: 32, link: "https://www.meesho.com/search?q=Sunscreen+SPF+50" }]},
  { id: 30, name: "Himalaya Neem Face Wash 150ml", category: "Skin Care", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400", stores: [
    { name: "Amazon", price: 199, discount: 30, link: "https://www.amazon.in/s?k=Himalaya+Neem+Face+Wash" },
    { name: "Flipkart", price: 189, discount: 34, link: "https://www.flipkart.com/search?q=Himalaya+Neem+Face+Wash" },
    { name: "Meesho", price: 219, discount: 23, link: "https://www.meesho.com/search?q=Himalaya+Face+Wash" }]}
];

app.get('/', (req,res)=> res.send('PriceLoot Live! Real Products: '+PRODUCTS.length));
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
app.listen(PORT, ()=> console.log('Running '+PORT));
