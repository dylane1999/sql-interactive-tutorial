import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: {
		type: String,
		unique: true,
		required: true
	}
});

export default mongoose.model("User", UserSchema);
