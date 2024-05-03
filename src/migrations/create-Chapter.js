"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Chapter", {
      chapterID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bookID: {
        type: Sequelize.INTEGER,
      },
      writerID: {
        type: Sequelize.INTEGER,
      },
      chapterName: {
        type: Sequelize.STRING,
      },
      orderNumber: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.TEXT,
      },
      audio: {
        type: Sequelize.STRING,
      },
      view: {
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Chapter");
  },
};

// run code to DB: npx sequelize-cli db:migrate
// run code to undo DB: npx sequelize-cli db:migrate:undo
