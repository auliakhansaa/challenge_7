'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameName extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // GameName.hasMany(models.UserGameHistory, {
      //   foreignKey: "id_game",
      //   as: "id_game_h",
      // });
    }
  }
  GameName.init({
    nama_game: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GameName',
  });
  return GameName;
};