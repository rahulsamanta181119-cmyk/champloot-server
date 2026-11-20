const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const PRODUCTS = [
  {
    id: 1, name: "boAt Airdopes 141 TWS Earbuds", category: "Earbuds",
    image: "https://m.media-amazon.com/images/I/51aT8yKxK8L._SL1500_.jpg",
    stores: [
      { name: "Amazon", price: 1299, discount: 74, link: "https://www.amazon.in/s?k=boat+airdopes+141" },
      { name: "Flipkart", price: 1199, discount: 76, link: "https://www.flipkart.com/search?q=boat+airdopes+141" },
      { name: "Meesho", price: 1399, discount: 60, link: "https://www.meesho.com/search?q=boat+airdopes" }
    ]
  },
  {
    id: 2, name: "Noise ColorFit Pro 5 Smart Watch", category: "Watch",
    image: "https://m.media-amazon.com/images/I/61x+8j2g8QL._SL1500_.jpg",
    stores: [
      { name: "Amazon", price: 2499, discount: 68, link: "https://www.amazon.in/s?k=noise+colorfit+pro+5" },
      { name: "Flipkart", price: 2299, discount: 70, link: "https://www.flipkart.com/search?q=noise+colorfit+pro+5" },
      { name: "Meesho", price: 2599, discount: 55, link: "https://www.meesho.com/search?q=smart+watch" }
    ]
  },
  {
    id: 3, name: "Puma Running Shoes For Men", category: "Shoes",
    image: "https://m.media-amazon.com/images/I/61p+2y5k5wL._SL1500_.jpg",
    stores: [
      { name: "Amazon", price: 1799, discount: 55, link: "https://www.amazon.in/s?k=puma+running+shoes" },
      { name: "Flipkart", price: 1649, discount: 58, link: "https://www.flipkart.com/search?q=puma+shoes" },
      { name: "Meesho", price: 899, discount: 40, link: "https://www.meesho.com/search?q=puma+shoes" }
    ]
  },
  {
    id: 4, name: "Samsung Galaxy M34 5G Mobile", category: "Mobile",
    image: "https://m.media-amazon.com/images/I/81+6Yv0+9gL._SL1500_.jpg",
    stores: [
      { name: "Amazon", price: 15999, discount: 36, link: "https://www.amazon.in/s?k=samsung+m34" },
      { name: "Flipkart", price: 15499, discount: 38, link: "https://www.flipkart.com/search?q=samsung+m34" },
      { name: "Shopsy", price: 15899, discount: 35, link: "https://www.shopsy.in/search?q=samsung+m34" }
    ]
  }
];

app.get('/', (req,res)=> res.send('PriceLoot Server Live!'));

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
app.listen(PORT, ()=> console.log('Server running on ' + PORT));
