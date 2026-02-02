const moongoose = require("mongoose");

const userSchema = new moongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const userModel = moongoose.model("user", userSchema);

module.exports = userModel;
