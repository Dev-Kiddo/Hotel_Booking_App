import mongoose from "mongoose";

const connectDB = async function () {
  try {
    const data = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`Database ${data.connection.host} connected successfully`);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unknown error:", error);
    }
  }
};

export default connectDB;
