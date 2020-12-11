'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER,DATE,JSON} = Sequelize
    await queryInterface.createTable('messages', {
       id: {
         type:INTEGER,
         primaryKey:true
       },
       body:JSON,
       from_id:INTEGER,
       to_id:INTEGER,
       created_at:DATE,
       updated_at: DATE,
       conversation_id:INTEGER
      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('messages');
  }
};
