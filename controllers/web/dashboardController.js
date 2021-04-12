const {join} = require("path");
const {user_game, user_game_biodata, user_game_history} = require("../../models");
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
					biodata_id: {
						name: req.body.name,
						sex: req.body.sex,
						email: req.body.email,
					},
					history_id: {
						skor: Math.floor(Math.random() * 60 + 1),
						play_time: `${Math.floor(Math.random() * 100)} minutes`,
					},
				},
				{
					include: [
						{
							model: user_game_biodata,
							as: "biodata_id",
						},
						{
							model: user_game_history,
							as: "history_id",
						},
					],
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
				include: [
					{
						model: user_game_biodata,
						as: "biodata_id",
					},
					{
						model: user_game_history,
						as: "history_id",
					},
				],
			})
			.then((user) => {
				res.render(join(__dirname, "../../views/dashboard"), {
					content: "./updateUser",
					user: user,
				});
			});
	};

	editUser = (req, res) => {
		// user_game.update(
		// 	{
		// 		username: req.body.username,
		// 		password: req.body.password,
		// 	},
		// 	{where: {id: req.params.id}}
		// );
		// biodata_id
		// 	.update(
		// 		{
		// 			name: req.body.name,
		// 			sex: req.body.sex,
		// 			email: req.body.email,
		// 		},
		// 		{where: {user_id: req.params.id}}
		// 	)
		// 	.then((user) => {
		// 		res.redirect("/");
		// 	})
		// 	.catch((err) => {
		// 		res.status(422).json("Can't update user");
		// 	});
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
