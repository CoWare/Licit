import mongoose from 'mongoose';
import Logger from '../../Logger.js';

mongoose.connect(process.env.MongoURI);
const db = mongoose.connection;

db.on('error', (err) => {
  Logger.error(`error: ${err.message}`);
});

db.once('open', () => {
  Logger.info('Database is connected...');
});
