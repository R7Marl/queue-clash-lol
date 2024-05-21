import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { Server } from 'socket.io';
import http from "http";
const app = express();
const server = http.createServer(app, { cors: { origin: "*" }, path: "/socket.io" });
const io = new Server(server);
import indexRoute from './routes/index.js';
import path from 'path';
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(indexRoute);
io.on('connection', (socket) => {
    console.log("User connected" + socket.id);
})
export default app;