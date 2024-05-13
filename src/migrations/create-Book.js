"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Book", {
      bookID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      writerID: {
        type: Sequelize.INTEGER,
      },
      bookName: {
        type: Sequelize.STRING,
      },
      author: {
        type: Sequelize.STRING,
      },
      writer: {
        type: Sequelize.STRING,
      },
      ratting: {
        type: Sequelize.STRING,
      },
      poster: {
        type: Sequelize.STRING,
      },
      view: {
        type: Sequelize.STRING,
      },
      desciption: {
        type: Sequelize.TEXT,
      },
      tag: {
        type: Sequelize.STRING,
      },
      follow: {
        type: Sequelize.INTEGER,
      },
      vote: {
        type: Sequelize.INTEGER,
      },
      approve: {
        type: Sequelize.STRING,
      },
      status: {
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
    await queryInterface.dropTable("Book");
  },
};

// run code to DB: npx sequelize-cli db:migrate
// run code to undo DB: npx sequelize-cli db:migrate:undo
