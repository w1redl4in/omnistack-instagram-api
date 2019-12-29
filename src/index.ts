import express, { Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import IO from 'socket.io';
import cors from 'cors';
import path from 'path';

const app = express();
const server = require('http').Server(app);
export const soquete = IO(server);

mongoose.connect(
  'mongodb+srv://fezinho11:123felao@cluster0-mtv2i.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log(`Mongo is connected on remote Atlas`);
  }
);

app.use(cors());
app.use(routes);
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))
);

server.listen(3333, () => {
  console.log(`Server is listening on port 3333`);
});
