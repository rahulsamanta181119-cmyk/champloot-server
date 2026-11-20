const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const HEADERS = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36', 'Accept-Language': 'en-IN,en;q=0.9' };
async function fetchPrice(url, selector) {
  try {
    const { data } = await axios.get(url, { headers: HEADERS, timeout: 8000 });
    const $ = cheerio.load(data);
    let price = parseInt($(selector).first().text().trim().replace(/[^0-9]/g, ''));
    return isNaN(price) ? null : price;
  } catch (e) { return null; }
}
app.get('/api/price', async (req, res) => {
  const q = req.query.q || "Nike Shoes";
  const query = encodeURIComponent(q);
  const [amazon, flipkart, myntra, meesho] = await Promise.all([
    fetchPrice(`https://www.amazon.in/s?k=${query}`, '.a-price-whole'),
    fetchPrice(`https://www.flipkart.com/search?q=${query}`, '._30jeq3'),
    fetchPrice(`https://www.myntra.com/${query}`, '.product-discountedPrice'),
    fetchPrice(`https://www.meesho.com/search?q=${query}`, '.sc-eDvSVe'),
  ]);
  let results = [
    { store: "Amazon", price: amazon, link: `https://www.amazon.in/s?k=${query}`, logo: "🛒" },
    { store: "Flipkart", price: flipkart, link: `https://www.flipkart.com/search?q=${query}`, logo: "🛍️" },
    { store: "Myntra", price: myntra, link: `https://www.myntra.com/${query}`, logo: "👗" },
    { store: "Meesho", price: meesho, link: `https://www.meesho.com/search?q=${query}`, logo: "🛒" },
    { store: "Ajio", price: null, link: `https://www.ajio.com/search/?text=${query}`, logo: "✨" },
  ];
  let withPrice = results.filter(r => r.price);
  withPrice.sort((a,b) => a.price - b.price);
  let lowest = withPrice[0] ? withPrice[0].store : null;
  res.json({ query: q, lowest, results });
});
app.get('/', (req,res)=> res.send("PriceLoot Server Running"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log("Server running on port " + PORT));