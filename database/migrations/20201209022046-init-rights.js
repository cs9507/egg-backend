'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const {DATE,INTEGER,STRING} = Sequelize
    await queryInterface.createTable('rights',{
      id:{
        type:INTEGER,
        primaryKey:true
      },
      name:STRING,
      key_name:STRING,
      desc:STRING,
      created_at: DATE,
      updated_at: DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('rights');
  }
};
