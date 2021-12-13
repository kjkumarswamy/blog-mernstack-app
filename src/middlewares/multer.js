const multer = require("multer");
const shortid = require("shortid");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");

const s3 = new aws.S3({
  accessKeyId: "AKIAQ5Z4BDMSN4FUOKGE",
  secretAccessKey: "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",
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "src/uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, shortid.generate() + "-" + file.originalname);
//   },
// });

// exports.upload = multer({ storage });

exports.uploadS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: "blog-mern-app",
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname);
    },
  }),
});
