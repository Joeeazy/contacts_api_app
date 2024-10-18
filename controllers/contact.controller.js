import asyncHandler from "express-async-handler";
import Contact from "../models/contact.model.js";

export const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

export const getcontact = asyncHandler(async (req, res) => {
  res.json({ Message: `Get Contact for ${req.params.id}` });
});

export const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is", req.body);

  const { name, email, phone } = req.body;

  if (!name || !email || !phoneNumber) {
    res.status(400);
    throw new Error("All fields are required!");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
  });

  res.status(200).json(contact);
});

export const updateContact = asyncHandler(async (req, res) => {
  res.json({ Message: `update contact for ${req.params.id}` });
});

export const deleteContact = asyncHandler(async (req, res) => {
  res.json({ Message: `Delete Contact for ${req.params.id}` });
});
