const mongoose = require("mongoose");

const connetDB = async () => {
	try {
		const res = await mongoose.connect(process.env.MONGO_URI);
		if (res?.ConnectionStates?.connected) {
			console.log("Successfully connected to DATABASE");
		}
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = connetDB;
