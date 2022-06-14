'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGameBiodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserGameBiodata.belongsTo(models.UserGame, {
        foreignKey: "id_user_game",
        as: "id_user_game_b",
      });
    }
  }
  UserGameBiodata.init({
    nama_lengkap: DataTypes.STRING,
    tanggal_lahir: DataTypes.STRING,
    alamat: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'UserGameBiodata',
  });
  return UserGameBiodata;
};