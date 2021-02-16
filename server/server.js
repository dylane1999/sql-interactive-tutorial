//! use "npm run server" to start

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import "./models/User.js";
//* ^^^ This is importing a mongoDB schema.
// Make sure to not import this again,
// or it will be duplicated in our DB.
// to have access to the User model use:
// const User = mongoose.model("User");
import episodeRouter from "./routes/episodeRoutes.js";
import testRouter from "./routes/route2.js";
import userRouter from "./routes/userRouter.js";
import connectDB from "./config/db.js";
import seasonRouter from "./routes/seasonRoutes.js"
import analyticsRouter from "./routes/analyticsRoutes.js";
import youtubeRouter from "./routes/youtubeRoutes.js"

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan("common"));

app.use("/episodes", episodeRouter);
app.use(seasonRouter);
app.use(testRouter);
app.use("/users", userRouter);
app.use("/analytics", analyticsRouter);
app.use("/youtube", youtubeRouter)

//const PORT = config.get("PORT");
var PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`server started on PORT ${PORT}`);
});
