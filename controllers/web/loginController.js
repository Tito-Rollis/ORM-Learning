const {join} = require("path");
const bcrypt = require("bcrypt");
const {user_game} = require("../../models");

class LoginController {
	// Login Form
	login = (req, res) => {
		res.render(join(__dirname, "../../views/login"));
	};
	// Submitting
	doLogin = async (req, res) => {
		const body = req.body;
		if (!(body.username && body.password)) {
			return res.status(400).send({error: "Data not formatted"});
		}

		user_game
			.findOne({where: {username: body.username}})
			.then((user) => {
				console.log(user);
				bcrypt.compare(body.password, user.password, (err, data) => {
					if (err) throw err;
					if (data) {
						res.cookie("loginData", JSON.stringify(user));
						res.redirect("/");
					} else {
						return res.status(401).json({message: "invalid credential"});
					}
				});
			})
			.catch((err) => {
				return res.status(401).json({message: "invalid credential"});
			});
	};
	// Log out
	logout = (req, res) => {};
}

module.exports = LoginController;
