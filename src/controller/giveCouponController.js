import giveCouponService from "../service/giveCouponService";

const createGiveCouponFunc = async (req, res) => {
  try {
    let data = await giveCouponService.createGiveCoupon(req.body);
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
module.exports = {
  createGiveCouponFunc,
};
