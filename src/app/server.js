import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import { Server } from 'socket.io';
import apiRouter from './routes.js';
import { registerMatchmakingHandlers } from '../modules/matchmaking/infrastructure/websocket/matchmaking-socket.js';

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: { origin: '*' }
});

registerMatchmakingHandlers(io);

export { app, httpServer as server };
