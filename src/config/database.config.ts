import mongoose from "mongoose";
import { ApplicationError } from "@/config/error.config";
import { logger } from "@/config/logger.config";

const { MONGODB_URI, DB_CONNECTION_RETRIES } = process.env;
const RETRIES = DB_CONNECTION_RETRIES || 3;

const mongodb = {
	async connect() {
		let connectionAttempts = 0;

		while (connectionAttempts < RETRIES) {
			try {
				if (MONGODB_URI) {
					await mongoose.connect(MONGODB_URI);
					mongoose.connection.on("error", (err) => {
						const error = new ApplicationError(`MongoDB connection error: ${err}`);
						logger.logError(error); // Call the logError method on the logger object
						throw error;
					});
					console.log("MongoDB connected.");
					break;
				} else {
					const error = new ApplicationError("MongoDB credentials not found.");
					logger.logError(error); // Call the logError method on the logger object
					throw error;
				}
			} catch (error) {
				logger.logError(error); // Call the logError method on the logger object
				connectionAttempts++;

				if (connectionAttempts === RETRIES) {
					break;
				}

				// Wait before the next retry (optional)
				await new Promise((resolve) => setTimeout(resolve, 2000));
			}
		}
	},
};

export default mongodb;
