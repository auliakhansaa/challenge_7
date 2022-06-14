'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserGameBiodata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user_game:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "UserGames",
          key: "id",
        },
      },
      nama_lengkap: {
        allowNull:false,
        type: Sequelize.STRING
      },
      tanggal_lahir: {
        allowNull:true,
        type: Sequelize.STRING
      },
      alamat: {
        allowNull:true,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserGameBiodata');
  }
};