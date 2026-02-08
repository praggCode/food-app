const foodModel = require("../models/food.model")
const storageService = require("../services/storage.service")
const { v4: uuidv4 } = require("uuid");

async function createFood(req, res){
    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuidv4());

    const newFood = await foodModel.create({
        name: req.body.name,
        description: req.body.description,
        video: fileUploadResult.url,
        foodPartnerId: req.foodPartner._id,
    });

    res.status(201).json({
        message: "Food created successfully",
        food: newFood,
    });
}
  
module.exports = {
  createFood,
};