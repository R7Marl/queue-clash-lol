import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import socketHandler from './services/QueueServices/matchs/findMatchService.js';
import { Server } from 'socket.io';
const app = express();
const server = http.createServer(app);
import indexRoute from './routes/index.js';
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(indexRoute);
const io = new Server(server, {
    cors: {
        origin: "*",
        }
});

socketHandler(io);
export default server;