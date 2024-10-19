import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the contact's name"],
    },
    email: {
      type: String,
      required: [true, "Please add the contact's name"],
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("contact", contactSchema);

export default Contact;
