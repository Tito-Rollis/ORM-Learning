const {user_game, user_game_biodata, user_game_history} = require("../../models");
// const {Op} = require("sequelize");

class UserController {
	getUser = (req, res) => {
		// SEQUELIZE CODE
		user_game
			.findAll({
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
				console.log(user);
				res.send(user);
			});
	};

	getDetailUser = (req, res) => {
		const index = req.params.index;
		// SEQUELIZE CODE
		user_game
			.findAll(
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
				},
				{
					where: {id: index},
				}
			)
			.then((user) => {
				console.log(user);
				res.send(user);
			});
	};

	insertUser = (req, res) => {
		const body = req.body;
		// SEQUELIZE CODE
		user_game
			.create({
				username: body.username,
				password: body.password,
				user_biodata: body.user_biodata,
				user_history: body.user_history,
				createdAt: new Date(),
				updatedAt: new Date(),
			})
			.then((user) => {
				console.log(user);
				res.send(user);
			})
			.catch((err) => {
				res.status(422).json(`can't create user`);
			});
	};

	updateUser = (req, res) => {
		const index = req.params.index;
		user_game
			.update(
				{
					username: "Kitty",
					password: "meow",
				},
				{where: {id: index}}
			)
			.then((user) => {
				console.log(user);
				res.send(user);
			});
	};

	deleteUser = (req, res) => {
		const index = req.params.index;
		user_game
			.destroy({
				where: {id: index},
			})
			.then((user) => {
				console.log(user);
				res.send({});
			});
	};
}

module.exports = UserController;
