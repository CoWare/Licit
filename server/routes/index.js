import express from 'express';

const homePage = express.Router();

homePage.get('/', (req, res) => {
  res.send({ content: 'Welcome to our website.' });
});


export default homePage;
