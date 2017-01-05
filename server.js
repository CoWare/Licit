import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import Logger from './Logger.js';

/**
 * Import app routes
 */
import homepage from './server/routes/index.js';
import authRoute from './server/routes/auth.js';
import usersRoute from './server/routes/users.js';
import docsRoute from './server/routes/documents.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Setup route middlewares.
 */
app.use('/', homepage);
app.use('/auth', authRoute);
app.use('/users', usersRoute);
app.use('/api', docsRoute);

/**
 * Handle unknown routes
 */
app.use((req, res) => {
  res.status(404).json({
    error: 'This page does not exist yet.'
  });
});

/**
 * Error handler
 */
app.use((err, req, res, next) => {
  Logger.error(`error: ${err.message}`);
  res.status(err.code || 500).json({ error: err.reason });
  next();
});

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    Logger.error(`App failed to start.\n${err}`);
  }
  Logger.info(`App started on port ${port}`);
});

export default app;
