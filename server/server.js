import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import episodeRouter from "./routes/episodeRoutes.js";
// const bodyParser = require('body-parser');

const PORT = config.get("PORT");

const app = express();
app.use(cors());
app.use(express.json());
// app.use(bodyParser);
app.use(express.urlencoded({ extended: false }));

app.use(episodeRouter);

require("./routes/episodeRoutes")(app);
require("./routes/route2.js")(app);

var port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log("server started on port 5000");
});
