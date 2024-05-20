import app from './src/server.js';
import dotenv from 'dotenv';
import { connectionDB } from './src/config/database.js';
dotenv.config();
connectionDB();
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
})