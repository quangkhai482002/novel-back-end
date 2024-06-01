import express from "express";
import apiController from "../controller/apiController";
import bookController from "../controller/bookController";
import forumController from "../controller/forumController";
import groupController from "../controller/groupController";
import reviewController from "../controller/reviewController";
import roleController from "../controller/roleController";
import userController from "../controller/userController";
import { checkUserJWT } from "../middleware/JWTAtion";
import paymentController from "../controller/paymentController";
import giveCouponController from "../controller/giveCouponController";

// upload image
const cloudinary = require("../config/cloundinary");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "images",
  allowedFormats: ["jpg", "png", "jpeg"],
  transformation: [{ width: 500, height: 500, crop: "limit" }],
});
const upload = multer({ storage: storage });

// payOS
const payos = require("../config/payOS");
const YOUR_DOMAIN = "http://localhost:3000";

const router = express.Router();

/**
 *
 * @param {*} app : express app
 */
const initApiRoutes = (app) => {
  // path, handle
  // restful api
  // get, post, put, patch, delete

  // router.all(
  //   "*", // all path
  //   checkUserJWT
  //   // checkUserPermission
  // );

  router.post("/register", apiController.handleRegister);
  router.post("/login", apiController.handleLogin);
  router.post("/logout", apiController.handleLogout);

  router.get("/account", checkUserJWT, userController.getUserAccount);
  // user routes
  router.get("/user/read", userController.readUserFunc);
  router.post("/user/create", userController.createFunc);
  router.put("/user/update", userController.updateUserFunc);
  router.get("/user/read/:id", userController.getInforUserbyIDFunc);
  router.delete("/user/delete", userController.deleteFunc);
  router.get("/user/coin/:id", userController.getCoinFunc);
  // group routes
  router.get("/group/read", groupController.readFunc);

  // role routes
  router.get("/role/read", roleController.readFunc);
  router.post("/role/create", roleController.createFunc);
  router.delete("/role/delete", roleController.deleteFunc);
  router.get("/role/by-group/:groupId", roleController.getRoleByGroup);
  router.post("/role/assign-to-group", roleController.assignRoleToGroup);

  //book routes
  router.get("/book/read-all", bookController.getAllBookFunc);
  router.get("/book/read", bookController.readFunc);
  router.get("/book/read/:id", bookController.readByIDFunc);
  router.post(
    "/book/create",
    upload.fields([{ name: "poster", maxCount: 1 }]),
    bookController.createFunc
  );
  router.post(
    "/book/create-image",
    upload.fields([{ name: "poster", maxCount: 1 }]),
    bookController.createImageFunc
  );
  router.get("/book/by-user/:id", bookController.readByUserId);
  router.put("/book/update", bookController.updateBookFunc);
  router.get("/book/by-name/:name", bookController.getBookByNameFunc);
  router.post("/bookshelf/create", bookController.addToBookshelfFunc);
  router.get("/bookshelf/read/:id", bookController.getBookShelfFunc);
  router.delete("/bookshelf/delete", bookController.deleteBookInBookShelfFunc);
  router.post("/vote/book/:bookID", bookController.voteBookFunc);

  // chapter routes
  router.get("/chapter/readAll/:id", bookController.getChapterFunc);
  router.get(
    "/chapter/read/:bookID/:orderNumber",
    bookController.readChapterFunc
  );
  router.get("/chapter/draft/:id", bookController.getChapterDraftFunc);
  router.post("/chapter/create", bookController.createChapterFunc);
  router.put("/chapter/update", bookController.updateChapterFunc);
  router.put("/chapter/publish/:id", bookController.updatePublishChapterFunc);
  router.delete("/chapter/delete/:id", bookController.deleteChapterFunc);

  // forum routes
  router.post("/forum/create", forumController.createForumFunc);
  router.get("/forum/read", forumController.readForumFunc);
  router.get("/forum/read/:forumID", forumController.readForumByForumIDFunc);
  router.put("/forum/update", forumController.updateForumFunc);
  router.delete("/forum/delete", forumController.deleteForumFunc);

  // reiview, comment routes
  router.get("/review/read/:bookID", reviewController.readReviewByBookIDFunc);
  router.post("/review/create", reviewController.createReviewFunc);

  router.get(
    "/comment/read/:chapterID",
    reviewController.getCommentByChapterIdFunc
  );
  router.get(
    "/comment/read/post/:postID",
    reviewController.getCommentByPostIdFunc
  );
  router.post("/comment/create", reviewController.createCommentFunc);

  // payment routes
  router.post("/create-payment-link", async (req, res) => {
    const order = {
      ...req.body,
      orderCode: Math.floor(Math.random() * 1000000),
      returnUrl: `http://localhost:3000`,
      cancelUrl: `http://localhost:3000`,
    };
    const paymentLink = await payos.createPaymentLink(order);
    return res.json(paymentLink);
  });
  router.post("/receive-hook", paymentController.createPaymentFunc);
  router.get("/payment/read", paymentController.getPaymentFunc);

  // give coupon routes
  router.post("/give-coupon/create", giveCouponController.createGiveCouponFunc);

  return app.use("/api/v1/", router);
};

export default initApiRoutes;
