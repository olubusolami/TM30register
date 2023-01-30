const mongoose = require("mongoose");
const validator = require("validator");

const registerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email address is required."],
      unique: true,
      validate: [validator.isEmail, "Please provide a valid email address."],
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    courses: {
      type: String,
      required: true,
      enum: ["Backend_web_development", "Mobile_development", "Frontend_web_development"],
    },
    additionalInformation: {
        type: String, 
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Register", registerSchema);