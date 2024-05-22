import paymentService from "../service/paymentService";

const createPaymentFunc = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const descriptionParts = req.body.data.description.split(" ");
    let payment = {
      userID: descriptionParts[1],
      serviceName: descriptionParts[2],
      amount: req.body.data.amount,
      time: req.body.data.transactionDateTime,
      codePayment: req.body.data.orderCode,
      status: req.body.data.desc,
    };
    console.log("payment", payment);
    let data = await paymentService.createPayment(payment);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    return res.status(500).json({
      EC: -1,
      EM: "Error from server",
      DT: "",
    });
  }
};
const getPaymentFunc = async (req, res) => {
  try {
    let data = await paymentService.getPayment();
    return res.status(200).json({
      EC: data.EC,
      EM: data.EM,
      DT: data.DT,
    });
  } catch (error) {
    return res.status(500).json({
      EC: -1,
      EM: "Error from server",
      DT: "",
    });
  }
};
export default {
  createPaymentFunc,
  getPaymentFunc,
};
