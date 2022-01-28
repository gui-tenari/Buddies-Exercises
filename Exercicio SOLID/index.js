const express = require('express')
const bodyParser = require('body-parser');
const errorHandler = require('./Middlewares/errorHandler');
const { getPlants, getPlantsById } = require('./Controllers/getPlants');

const app = express()
const port = 3000;


app.use(bodyParser.json());

app.get('/plant/:id', getPlantsById )

app.get('/plants', getPlants)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(errorHandler);