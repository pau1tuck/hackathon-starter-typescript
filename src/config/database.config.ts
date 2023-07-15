import mongoose from "mongoose";

const { MONGODB } = process.env;

const mongodb = {
    connect() {
        if (MONGODB) {
            mongoose.connect(MONGODB);
            mongoose.connection.on("error", err => {
                throw new Error(`Connection error: ${err}`);
            });
            console.log("MongoDB connected.");
        } else {
            throw new Error("No MongoDB credentials provided.");
        }
    },
};

export default mongodb;
