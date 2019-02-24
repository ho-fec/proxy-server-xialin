const express = require('express');
const parser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const axios = require('axios');
const path = require('path');
const PORT = 3000;
const app = express();

let id = Math.floor(Math.random()*100);

app.use(cors());
app.use(morgan('dev'))
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './public')));


app.get(`/productDetails`, (req, res) => {
    axios
      .get(`http://localhost:3002/productDetails/${id}`)
      .then(({data}) => { res.json(data) })
      .catch(() => { res.status(404).end() })
})

app.get(`/ratings`, (req, res) => {
    axios
      .get(`http://localhost:3003/ratings/${id}`)
      .then(({data}) => { res.json(data) })
      .catch(() => { res.status(404).end() })
})

app.get(`/similar`, (req, res) => {
    axios
      .get(`http://localhost:3004/similar/${id}`)
      .then(({data}) => { res.json(data) })
      .catch(() => { res.status(404).end() })
})

app.get(`/explores`, (req, res) => {
    axios
      .get(`http://localhost:3005/explores/${id}`)
      .then(({data}) => { res.json(data) })
      .catch(() => { res.status(404).end() })
})

app.get(`/like`, (rreq, res) => { 
    axios
      .get(`http://localhost:3004/like/${id}`)
      .then(({data}) => { res.json(data) })
      .catch(() => { res.status(404).end() })
 })


app.listen(PORT, () => console.log('PORT listening on', PORT))
