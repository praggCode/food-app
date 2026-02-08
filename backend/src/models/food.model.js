const moongoose = require("mongoose");

const foodSchema = new moongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    video : {
        type: String,
        required: true,
    },
    description : {
        type: String,
    },
    foodPartnerId: {
        type: moongoose.Schema.Types.ObjectId,
        ref: "foodPartner",
        required: true,
    },
  },
  { timestamps: true },     
)

const foodModel = moongoose.model("food", foodSchema);

module.exports = foodModel;