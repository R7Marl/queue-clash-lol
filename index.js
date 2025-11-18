import dotenv from 'dotenv';
import { server } from './src/app/server.js';
import { connectMongo } from './src/shared/infrastructure/database/mongoose-connection.js';

dotenv.config();

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectMongo();
    server.listen(port, () => {
      console.log(`Servidor corriendo en el puerto ${port}`);
    });
  } catch (error) {
    console.error('No se pudo iniciar la aplicación', error);
    process.exit(1);
  }
};

start();
