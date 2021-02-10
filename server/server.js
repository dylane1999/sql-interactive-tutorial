// use "npm run server" to start

import express from "express";
import cors from "cors";
import episodeRouter from "./routes/episodeRoutes.js";
import testRouter from "./routes/route2.js";
import connectDB from "./config/db.js";

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(episodeRouter);
app.use(testRouter);

//const PORT = config.get("PORT");
var PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`server started on PORT ${PORT}`);
});
