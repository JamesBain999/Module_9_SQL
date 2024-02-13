const axios = require("axios");
const { response } = require("express");

("use strict");

const dataFetcher = (query, res) => {
  const { numberOfQuotes } = query;
  axios.get(`https://api.breakingbadquotes.xyz/v1/quotes/${numberOfQuotes}`)
  .then(response => {res.json(response.data)})
};

const dataFetcherAgain = (req, res) => {
  const category = req.params.category
  axios.get(`https://swapi.dev/api/${category}`)
  .then((response) => {
    res.json(response.data);
  })
    .catch((error) => {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  });
};

module.exports = {
  dataFetcher,
  dataFetcherAgain
};
