import express from 'express';

const homePage = express.Router();

homePage.get('/', (req, res) => {
  res.send('Welcome to our website.');
});


export default homePage;
