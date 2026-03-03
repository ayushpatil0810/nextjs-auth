import mongoose from "mongoose";

export async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("Connected to the database successfully");
        });

        connection.on("error", (err) => {
            console.error("Database connection error:", err);
            process.exit(1);
        });
        
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
}