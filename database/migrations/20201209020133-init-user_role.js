'use strict';
//用户角色
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const {INTEGER,DATE} = Sequelize
    await queryInterface.createTable('user_role', { 
      role_id: {
        type: INTEGER,
        primaryKey: true
      },
       user_id:{
        type: INTEGER,
        primaryKey: true
       },
       created_at:DATE,
       update_at:DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('user_role');
  }
};
