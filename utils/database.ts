import mongoose from "mongoose";

let isConnected = false;
export const connectDb = async () => {
  try {
    if (isConnected) {
      console.log("MongoDb is already connected");
      return;
    }
    await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("Connected to Mongodb");
    isConnected = true;
  } catch (error) {
    console.log("Error connecting to MongoDb : ", error);
  }
};
