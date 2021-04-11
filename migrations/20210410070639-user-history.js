"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.addColumn(
				"user_games", // table name
				"user_biodata", // new field name
				{
					type: Sequelize.INTEGER,
					allowNull: true,
				}
			),
			queryInterface.addColumn(
				"user_games", // table name
				"user_history", // new field name
				{
					type: Sequelize.INTEGER,
					allowNull: true,
				}
			),
		]);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
	},
};
