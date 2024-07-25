const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Customers' });
});

app.get('/views/product', (req, res) => {
  res.render('product', { title: 'Product' });
});


app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});