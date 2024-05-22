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
      "Payment",
      [
        {
          paymentID: 1,
          userID: 1,
          serviceName: "premium",
          amount: "2000",
          time: "2024-05-22 05:22:00",
          codePayment: "148556",
          status: "success",
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
