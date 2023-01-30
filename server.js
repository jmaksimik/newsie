
import * as dotenv from 'dotenv'
dotenv.config()
import 'dotenv/config.js'


import express from 'express'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
import logger from 'morgan';
import favicon  from 'serve-favicon';

import './config/database.js'

// Require controllers here
const app = express();

// console.log(assetsRouter)
// add in when the app is ready to be deployed
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
// app.use("/src", assetsRouter);

import auth from './config/auth.js'

app.use(auth); 

import userRoutes from './routes/api/users.js';
import tagRoutes from './routes/api/tags.js';
import bookmarkRoutes from './routes/api/bookmarks.js';

app.use('/api/users', userRoutes);
app.use('/api/tags', tagRoutes);
app.use('/api/bookmarks', bookmarkRoutes)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const { PORT = 8000 } = process.env;
app.listen(PORT, () => {
  console.log();
  console.log(`  App running in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
