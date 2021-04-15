"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class user_game_biodata extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			user_game_biodata.belongsTo(models.user_game, {
				foreignKey: "biodata_id",
				onDelete: "CASCADE",
				onUpdate: "CASCADE",
			});
		}
	}
	user_game_biodata.init(
		{
			name: DataTypes.STRING,
			sex: DataTypes.STRING,
			email: DataTypes.STRING,
			user_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "user_game_biodata",
		}
	);
	return user_game_biodata;
};
