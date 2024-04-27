import app from './src/server.js';
import dotenv from 'dotenv';
dotenv.config();
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
})