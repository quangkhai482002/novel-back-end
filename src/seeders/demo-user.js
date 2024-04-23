"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "User",
      [
        {
          email: "admin@gmail.com",
          password:
            "$2a$10$FprEx3DcPw2G82kdoWY86uAFuAxBcBdo0BfQ66N5C.Me35oC/M9GO",
          username: "John Doe",
          role: "ADMIN",
        },
        {
          email: "user@gmail.com",
          password:
            "$2a$10$FprEx3DcPw2G82kdoWY86uAFuAxBcBdo0BfQ66N5C.Me35oC/M9GO",
          username: "John Doe1",
          role: "USER",
        },
        {
          email: "moderator@gmail.com",
          password:
            "$2a$10$FprEx3DcPw2G82kdoWY86uAFuAxBcBdo0BfQ66N5C.Me35oC/M9GO",
          username: "John Doe2",
          role: "MODERATOR",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

// runcode to create this file: npx sequelize-cli seed:generate --name demo-user
// runcode to seed data: npx sequelize-cli db:seed:all
// runcode to undo seed data: npx sequelize-cli db:seed:undo:all
