import mongoose from "mongoose";

export const connectionDB = async () => {

    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('Base de datos conectada');
    } catch (error) {
        throw new Error(error);
    }

}