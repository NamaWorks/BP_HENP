const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

// Serve static files from dist (for built assets)
app.use(express.static(path.join(__dirname, '../dist')));

// Home route renders the Pug template
app.get('/', (req, res) => {
  // res.render('index.pug',{
  //   cache: true,
  //   filename: 'index'
  // });
  res.render('index')
});

app.get('/about', (req, res) => {
  res.render('pages/about')
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
