import bookService from "../service/bookService";

const readFunc = async (req, res) => {
  try {
    let data = await bookService.getBook();
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EC: -1,
      EM: "Error from server",
      DT: "",
    });
  }
};
const readByIDFunc = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await bookService.getBookByID(id);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EC: -1,
      EM: "Error from server",
      DT: "",
    });
  }
};
module.exports = {
  readFunc,
  readByIDFunc,
};
