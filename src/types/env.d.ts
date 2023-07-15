declare namespace NodeJS {
    export interface ProcessEnv {
        MONGODB_URI: string | undefined;
        DB_CONNECTION_RETRIES: number;
    }
}
