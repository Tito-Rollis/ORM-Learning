const {join} = require("path");
const {user_game, user_game_biodata} = require("../../models");
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
			.create(
				{
					username: req.body.username,
					password: await bcrypt.hash(req.body.password, salt),
					user_biodata: {
						name: req.body.name,
						sex: req.body.sex,
						email: req.body.email,
					},
				},
				{
					include: {
						model: user_game_biodata,
						as: "user_biodata",
					},
				}
			)
			.then(() => {
				res.redirect("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	edit = (req, res) => {
		const index = req.params.id;
		// SEQUELIZE CODE
		user_game
			.findOne({
				where: {id: index},
			})
			.then((user) => {
				res.render(join(__dirname, "../../views/dashboard"), {
					content: "./updateUser",
					user: user,
				});
			});
	};

	editUser = (req, res) => {
		user_game
			.update(
				{
					username: req.body.username,
					password: req.body.password,
				},
				{where: {id: req.params.id}}
			)
			.then((user) => {
				res.redirect("/");
			})
			.catch((err) => {
				res.status(422).json("Can't update user");
			});
	};

	deleteUser = (req, res) => {
		user_game
			.destroy({
				where: {
					id: req.params.id,
				},
			})
			.then(() => {
				res.redirect("/");
			});
	};
}

module.exports = DashboardController;
