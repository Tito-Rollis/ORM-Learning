"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class user_game_history extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			user_game_history.associate = (models) => {
				user_game_history.belongsTo(models.user_game, {
					foreignKey: "history_id",
					onDelete: "CASCADE",
					onUpdate: "CASCADE",
				});
			};
		}
	}
	user_game_history.init(
		{
			skor: DataTypes.INTEGER,
			play_time: DataTypes.STRING,
			user_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "user_game_history",
		}
	);
	return user_game_history;
};
