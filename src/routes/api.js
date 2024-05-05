import express from "express";
import apiController from "../controller/apiController";
import userController from "../controller/userController";
import groupController from "../controller/groupController";
import roleController from "../controller/roleController";
import { checkUserJWT, checkUserPermission } from "../middleware/JWTAtion";
import bookController from "../controller/bookController";

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
  router.get("/user/read", userController.readFunc);
  router.post("/user/create", userController.createFunc);
  router.put("/user/update", userController.updateFunc);
  router.delete("/user/delete", userController.deleteFunc);
  // group routes
  router.get("/group/read", groupController.readFunc);

  // role routes
  router.get("/role/read", roleController.readFunc);
  router.post("/role/create", roleController.createFunc);
  router.delete("/role/delete", roleController.deleteFunc);
  router.get("/role/by-group/:groupId", roleController.getRoleByGroup);
  router.post("/role/assign-to-group", roleController.assignRoleToGroup);

  //book routes
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
  // chapter routes
  router.get("/chapter/readAll/:id", bookController.getChapterFunc);
  router.get("/chapter/read/:id", bookController.readChapterFunc);
  router.get("/chapter/draft/:id", bookController.getChapterDraftFunc);
  router.post("/chapter/create", bookController.createChapterFunc);
  router.put("/chapter/update", bookController.updateChapterFunc);
  router.put("/chapter/publish/:id", bookController.updatePublishChapterFunc);
  router.delete("/chapter/delete/:id", bookController.deleteChapterFunc);

  return app.use("/api/v1/", router);
};
export default initApiRoutes;
