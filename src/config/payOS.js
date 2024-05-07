const PayOS = require("@payos/node");

const payos = new PayOS(
  "7f5dc115-4af4-43f4-92a2-fd6665d67cf9",
  "be3a2c89-42ec-4ca7-a98a-2952b6ee817b",
  "21291722ad75e1ca0fb4902ad2ac9dbb95a19c4caadb6e690f960c1e18fc2695"
);

module.exports = payos;
