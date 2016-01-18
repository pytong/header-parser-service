"use strict";

module.exports = (app) => {

	app.route("/")
		.get((req, res) => {
			let ipaddress = req.headers["x-forwarded-for"],
				language = req.headers["accept-language"],
				software = req.headers["user-agent"],
				result = {ipaddress: ipaddress, language: language, software: software};

			res.json(result);
		});

};
