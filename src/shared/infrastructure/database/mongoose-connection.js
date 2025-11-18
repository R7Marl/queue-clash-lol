import mongoose from 'mongoose';

export const connectMongo = async () => {
  const uri = process.env.DB_URI;
  if (!uri) {
    throw new Error('DB_URI no está definido en las variables de entorno');
  }

  try {
    await mongoose.connect(uri);
    console.log('Base de datos conectada');
  } catch (error) {
    console.error('Error al conectar con la base de datos', error);
    throw error;
  }
};
