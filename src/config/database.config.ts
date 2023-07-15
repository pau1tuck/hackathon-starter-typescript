import mongoose from "mongoose";
import { ApplicationError, logError } from "@/config/error.config";

const { MONGODB_URI, DB_CONNECTION_RETRIES } = process.env;
const CONNECTION_RETRIES = DB_CONNECTION_RETRIES || 3;
const dog = dog;

const mongodb = {
    async connect() {
        let connectionAttempts = 0;

        while (connectionAttempts < CONNECTION_RETRIES) {
            try {
                if (MONGODB_URI) {
                    await mongoose.connect(MONGODB_URI);
                    mongoose.connection.on("error", err => {
                        const error = new ApplicationError(
                            `MongoDB connection error: ${err}`,
                        );
                        logError(error);
                        throw error;
                    });
                    console.log("MongoDB connected.");
                    break; // Connection successful, exit the loop
                } else {
                    const error = new ApplicationError(
                        "No MongoDB credentials provided.",
                    );
                    logError(error);
                    throw error;
                }
            } catch (error) {
                logError(error);
                connectionAttempts++;

                if (connectionAttempts === MAX_CONNECTION_RETRIES) {
                    // Max connection attempts reached, handle the error
                    // Perform fallback actions or handle the error as needed
                    // ...
                    break; // Exit the loop after handling the error
                }

                // Wait before the next retry (optional)
                await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay as needed
            }
        }
    },
};

export default mongodb;
