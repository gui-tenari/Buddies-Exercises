const express = require('express')
const bodyParser = require('body-parser');
const { Book } = require('./models');
const app = express()
const port = 3000

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/', async (req, res) => {
  const {title, author, pageQuantity } = req.body;
  const newBook = await Book.create({ title, author, pageQuantity })
  return res.status(200).json(newBook);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))