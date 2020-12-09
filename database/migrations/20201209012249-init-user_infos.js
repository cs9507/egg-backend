'use strict';
// 用户信息
module.exports = {
   // 在执行数据库升级时调用的函数，创建表
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { STRING,INTEGER, DATE } = Sequelize;
    await queryInterface.createTable('user_infos', { 
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nickname:STRING,
      avatar:STRING,
      sign:STRING,
      created_at:DATE,
      update_at:DATE,
      user_id:INTEGER
    });
  },
  // 在执行数据库降级时调用的函数，删除表
  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('user_infos');
  }
};
