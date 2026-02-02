const moongoose = require("mongoose");

const foodPartnerSchema = new moongoose.Schema(
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

const foodPartnerModel = moongoose.model("foodPartner", foodPartnerSchema);

module.exports = foodPartnerModel;