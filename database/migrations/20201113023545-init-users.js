'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING,INTEGER, DATE } = Sequelize;
    await queryInterface.createTable('users', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      provider: {
        type: STRING,
      },
      username: {
        type: STRING,
        unique: "username",
      },
      password: {
        type: STRING,
      },
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
