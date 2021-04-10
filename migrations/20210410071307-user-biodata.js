"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		[
			queryInterface.addColumn(
				"user_game_biodata", // table name
				"user_id", // new field name
				{
					type: Sequelize.INTEGER,
					allowNull: true,
				}
			),
		];
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
