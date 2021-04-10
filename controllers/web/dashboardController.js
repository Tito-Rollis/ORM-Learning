const {join} = require("path");
const {user_game} = require("../../models");
// const bcrypt = require("bcrypt");

class DashboardController {
	index = (req, res) => {
		user_game.findAll().then((users) => {
			res.render(join(__dirname, "../../views/dashboard"), {
				content: "./pages/userList",
				users: users,
			});
		});
	};
}

module.exports = DashboardController;
