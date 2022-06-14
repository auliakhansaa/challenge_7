'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserGame.hasMany(models.UserGameBiodata, {
        foreignKey: "id_user_game",
        as: "id_user_game_b",
      });

      UserGame.hasMany(models.UserGameHistory, {
        foreignKey: "id_user_game",
        as: "id_user_game_h",
      });
    }
  }
  UserGame.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserGame',
  });
  return UserGame;
};