"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class user_game extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here

			// 1 to 1
			user_game.associate = (models) => {
				user_game.hasOne(models.user_game_biodata, {
					foreignKey: "user_biodata",
					onDelete: "CASCADE",
				}),
					// 1 to many
					user_game.hasMany(models.user_game_biodata, {
						foreignKey: "user_biodata",
						onDelete: "CASCADE",
					});
			};
		}
	}
	user_game.init(
		{
			username: DataTypes.STRING,
			password: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "user_game",
		}
	);
	return user_game;
};
