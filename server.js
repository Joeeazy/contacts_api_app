import express from "express";
import dotenv from "dotenv";

import contactRoutes from "./routes/contact.routes.js";
import userRoutes from "./routes/user.routes.js";
import { errorHandler } from "./middleware/errors.middleware.js";
import { connectDB } from "./lib/mongodb.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);

  connectDB();
});
