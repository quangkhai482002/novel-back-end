const cloudinary = require("cloudinary").v2;

// import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "djkehztcp",
  api_key: "553395883917494",
  api_secret: "EEkvRVwhv8jjcW9WqqgLNw9y9UM",
});

module.exports = cloudinary;
