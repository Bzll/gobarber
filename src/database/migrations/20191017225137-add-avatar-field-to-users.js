module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
		return queryInterface.addColumn('users', 'avatar_id', {
			type: Sequelize.INTEGER,
			references: { model: 'files', key: 'id' },
			onUpdate: 'CASCADE',
			onDelete: 'SET NULL',
			allowNull: true,
		});
	},

	down: queryInterface => {
		return queryInterface.removeColumn('users', 'avatar_id');
	},
};
