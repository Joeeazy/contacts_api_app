import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongDB connected ${conn.connection.host},${conn.connection.name} `
    );
  } catch (error) {
    console.log("Error connecting to MongDB", error.message);
    process.exit(1); // 1 = failure 0 = success
  }
};
