import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const port = process.env.PORT || 8800;

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Conneted to MongoDB!");
  } catch (error) {
    console.log(error);
  }
};
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

// Middleware to serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, "../Client/dist")));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client/dist", "index.html"));
});

app.listen(port, () => {
  connect();
  console.log("Backend server is running!");
});
