import mongoose from "mongoose";

type connectionObject = {
    isConnected?: number
}

const connection: connectionObject = {};

const connect = async (): Promise<void> => {
    if (connection.isConnected) {
        console.log("Already connected to the database");
        return;
    }
    try {
        if (process.env.MONGO_URI){
            const db = await mongoose.connect(process.env.MONGO_URI);
            connection.isConnected = db.connections[0].readyState;
            console.log("Database connected successfully")
        }
    } catch (err) {
        console.log("Cannot connect to the database", err);
        process.exit(1);
    }
}

export default connect;