import express from "express";

const router = express.Router();

router.post("/register", (req, res) => {
  res.json({ message: "User Registered!!" });
});

router.post("/login", (req, res) => {
  res.json({ message: "User Login!!" });
});

router.get("/current", (req, res) => {
  res.json({ message: "Current user info!!" });
});

router.post("/logout", (req, res) => {
  res.json({ message: "user logged out!!" });
});

export default router;
