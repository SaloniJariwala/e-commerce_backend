const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	firstName: {
		type: "String",
		require: true
	},
	lastName: {
		type: "String",
		require: true
	},
	username: {
		type: "String",
		require: true,
		unique: true
	},
	password: {
		type: "String",
		require: true
	},
	email: {
		type: "String",
		require: true,
		unique: true
	},
	phone: {
		type: "String",
		require: true
	},
	address: {
		type: "String",
		require: true
	},
	city: {
		type: "String",
		require: true
	},
	state: {
		type: "String",
		require: true
	},
	country: {
		type: "String",
		require: true
	}
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
