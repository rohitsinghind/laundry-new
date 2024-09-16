import mongoose from "mongoose";

export const connectDb = async (): Promise<void> => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI as string);

        console.log(`Database connected: ${connection.host}`);
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
        process.exit(1); 
    }
};
