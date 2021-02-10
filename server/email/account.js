import sgMail from "@sendgrid/mail";
import config from "config";

const sgAPI = config.get("sendGridKey");

sgMail.setApiKey(sgAPI);

export const sendWelcomeEmail = (email, username) => {
	sgMail.send({
		to: email,
		from: "dylan@g.morison.org",
		subject: "Welcome!",
		text: `Welcome ${username}. Let us know how you like our app!`
	});
};
export const sendCancellationEmail = (email, username) => {
	sgMail.send({
		to: email,
		from: "dylan@g.morison.org",
		subject: "Account Cancellation",
		text: `Sorry to see you go, ${username}!`
	});
};
