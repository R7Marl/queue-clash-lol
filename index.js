import server from './src/server.js';
import dotenv from 'dotenv';
import { connectionDB } from './src/config/database.js';

dotenv.config();
connectionDB();
server.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
})