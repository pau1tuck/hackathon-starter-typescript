import mongoose from "mongoose";

const mongodb = {
    connect() {
        mongoose.connect(process.env.MONGODB_URI);
        mongoose.connection.on("error", err => {
            console.error(err);
            console.log("%s MongoDB connection error. Please make sure MongoDB is running.");
            process.exit();
        });
    },
    isConnected() {
        mongoose.
    },
};

export default mongodb;
