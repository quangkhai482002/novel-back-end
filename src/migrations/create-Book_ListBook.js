"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Book_ListBook", {
      bookID: {
        // allowNull: false,
        // autoIncrement: true,
        // primaryKey: true,
        type: Sequelize.INTEGER,
      },
      listID: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Book_ListBook");
  },
};

// run code to DB: npx sequelize-cli db:migrate
// run code to undo DB: npx sequelize-cli db:migrate:undo
