import express from "express";
import mongoose from "mongoose";
import { sendWelcomeEmail, sendCancellationEmail } from "../email/account.js";

const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (req, res) => {
	const { email, username } = req.body;
	const user = new User({ email, username });

	try {
		await user.save();
		sendWelcomeEmail(email, username);
		res.status(200).send({
			msg: `${username} succsesfully signed up! Check your inbox at ${email} to confirm your account!`
		});
	} catch (err) {
		console.log(err.message);
		res.status(400).send(err.mesage);
	}
});

router.delete("/delete", async (req, res) => {
	const email = req.headers.email;
	try {
		await User.findOneAndDelete({ email }, (err, doc) => {
			if (err) res.status(403).send(err.mesage);

			const { username } = doc;

			sendCancellationEmail(email, username);

			const msg = `The following document has been removed because the user unsubcribed: ${doc}`;
			console.log(msg);
			res.send("You have been unsubscribed");
		});
	} catch (err) {
		res.status(403).send(err.mesage);
	}
});

export default router;
