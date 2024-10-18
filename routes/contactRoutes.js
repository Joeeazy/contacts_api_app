import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ Message: "Get all Contacts" });
});

router.get("/:id", (req, res) => {
  res.json({ Message: `Get Contact for ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.json({ Message: "Create new Contact" });
});

router.put("/:id", (req, res) => {
  res.json({ Message: `update contact for ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.json({ Message: `Delete Contact for ${req.params.id}` });
});

export default router;
