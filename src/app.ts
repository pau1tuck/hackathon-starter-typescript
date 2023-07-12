import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import compression from "compression";
import bodyParser from "body-parser";
import logger from "morgan";
import errorHandler from "errorhandler";
import lusca from "lusca";
import MongoStore from "connect-mongo";
import flash from "express-flash";
import path from "path";
import mongoose from "mongoose";
import passport from "passport";
import sass from "node-sass-middleware";
// Import Multer middleware for handling multipart/form-data, used for uploading files.
import multer, { Multer } from "multer";
// Import controllers for route handling.
import controllers from "@/controllers";

// Load environmental variables from root .env file.
dotenv.config({ path: ".env" });

// Set destination directory for file uploads.
const upload: Multer = multer({ dest: path.join(__dirname, "uploads") });

console.log("Yes, it's working, bitch!");
