'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserGameHistories', {
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
      id_game: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // references: {
        //   model: "GameNames",
        //   key: "id",
        // },
      },
      score: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('UserGameHistories');
  }
};