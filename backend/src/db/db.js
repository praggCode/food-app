const moongoose = require('mongoose');

function connectDB() {
    moongoose
      .connect(
        // "mongodb+srv://progyansen_db_user:Password%40123@ccluster0.dlxai5d.mongodb.net/Food-APP?retryWrites=true&w=majority&appName=Cluster0",
        process.env.MONGODB_URI
      )
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((err) => {
        console.error("MongoDB Connection Error", err);
      });
}

module.exports = connectDB;