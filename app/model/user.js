"use strict";
module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define("user", {
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

  User.associate = function() {
    app.model.User.hasOne(app.model.UserInfo);
  };

  return User;
};
