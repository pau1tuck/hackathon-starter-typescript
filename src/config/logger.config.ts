import winston, { Logger } from "winston";

/**
 * The SingletonLogger class provides a logger instance using the singleton pattern.
 */
class SingletonLogger {
	// The single instance of the SingletonLogger class
	private static instance: SingletonLogger;

	// The logger instance from winston library
	private logger: Logger;

	/**
	 * Private constructor prevents instantiation from outside the class.
	 */
	private constructor() {
		// Initialize the logger with console and file transports
		this.logger = winston.createLogger({
			transports: [
				new winston.transports.Console(),
				new winston.transports.File({ filename: "error.log" }),
			],
		});
	}

	/**
	 * Returns the single instance of the SingletonLogger class.
	 * Creates a new instance if it doesn't exist.
	 * @returns The single instance of the SingletonLogger class.
	 */
	public static getInstance(): SingletonLogger {
		if (!SingletonLogger.instance) {
			SingletonLogger.instance = new SingletonLogger();
		}
		return SingletonLogger.instance;
	}

	/**
	 * Logs the error message.
	 * @param error - The error object to be logged.
	 */
	logError(error: Error) {
		this.logger.error(`Error occurred: ${error}`);
	}
}
export const logger = SingletonLogger.getInstance();
