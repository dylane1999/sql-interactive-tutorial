import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: {
		type: String,
		unique: true,
		required: true
	},
	username: String
});

export default mongoose.model("User", UserSchema);
