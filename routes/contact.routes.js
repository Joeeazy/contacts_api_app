import express from "express";
import {
  createContact,
  deleteContact,
  getAllContacts,
  getcontact,
  updateContact,
} from "../controllers/contact.controller.js";

const router = express.Router();

router.get("/", getAllContacts);

router.get("/:id", getcontact);

router.post("/", createContact);

router.put("/:id", updateContact);

router.delete("/:id", deleteContact);

export default router;
