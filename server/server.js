//! use "npm run server" to start

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import config from "config"

import SqlDriver from "./config/db.js";
import analyticsRouter from "./routes/analyticsRoutes.js";
import queryRoutes from "./routes/queryRoutes.js"


SqlDriver.getDriver();
/** connect to the SQL database */


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan("common"));

app.use(queryRoutes);


const PORT = config.get("PORT") || 5000;

app.listen(PORT, () => {
	console.log(`server started on PORT ${PORT}`);
});
