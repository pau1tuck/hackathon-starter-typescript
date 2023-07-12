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
import multer from "multer";

dotenv.config({ path: ".env" });

console.log("Yes, it's working, bitch!");
