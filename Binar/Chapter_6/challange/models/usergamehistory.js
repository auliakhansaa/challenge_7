'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGameHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserGameHistory.belongsTo(models.UserGame, {
        foreignKey: "id_user_game",
        as: "id_user_game_h",
      });

      // UserGameHistory.belongsTo(models.GameName, {
      //   foreignKey: "id_game",
      //   as: "id_game_h",
      // });
    }
  }
  UserGameHistory.init({
    id_user_game: DataTypes.INTEGER,
    id_game: DataTypes.INTEGER,
    score: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserGameHistory',
  });
  return UserGameHistory;
};