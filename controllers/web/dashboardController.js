const {join} = require("path");
const {user_game} = require("../../models");
const bcrypt = require("bcrypt");

class DashboardController {
	index = (req, res) => {
		user_game.findAll().then((users) => {
			res.render(join(__dirname, "../../views/dashboard"), {
				content: "./pages/userList",
				users: users,
			});
		});
	};

	add = (req, res) => {
		res.render(join(__dirname, "../../views/dashboard"), {
			content: "./pages/addUser",
		});
	};

	postUser = async (req, res) => {
		const salt = await bcrypt.genSalt(10);

		user_game
			.create({
				username: req.body.username,
				password: await bcrypt.hash(req.body.password, salt),
			})
			.then(() => {
				res.redirect("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

module.exports = DashboardController;
