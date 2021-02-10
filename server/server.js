// !use "npm run server" to start

import "./models/User.js";
//* ^^^ This is importing a mongoDB schema.
// Make sure to not import this again,
// or it will be duplicated in our DB.
// to have access the User model use:
// const User = mongoose.model("User");

import express from "express";
import cors from "cors";
import helmet from "helmet";
import episodeRouter from "./routes/episodeRoutes.js";
import testRouter from "./routes/route2.js";
import userRouter from "./routes/userRouter.js";
import connectDB from "./config/db.js";

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use(episodeRouter);
app.use(testRouter);
app.use("/users", userRouter);

//const PORT = config.get("PORT");
var PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`server started on PORT ${PORT}`);
});
