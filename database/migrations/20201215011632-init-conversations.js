'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER ,DATE,BOOLEAN,ENUM} = Sequelize;
    //使用枚举要定义值否则无法做migration
    await queryInterface.createTable('conversations', { 
      id: INTEGER ,
      type:{
        type:ENUM,
        values:[
          'chat',
          'groupchat'
        ]
      },
      active_time:DATE,
      active:BOOLEAN,
      created_at:DATE,
      updated_at:DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('conversations');
  }
};
