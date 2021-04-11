"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		// [
		// 	queryInterface.addColumn(
		// 		"user_game", // table name
		// 		"user_biodata", // new field name
		// 		{
		// 			type: Sequelize.INTEGER,
		// 		}
		// 	),
		// 	queryInterface.addColumn(
		// 		"user_game", // table name
		// 		"user_history", // new field name
		// 		{
		// 			type: Sequelize.INTEGER,
		// 		}
		// 	),
		// ];
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
		await queryInterface.removeColumn("user_game_biodata", "user_id");
	},
};
