export const getAllContacts = async (req, res) => {
  res.json({ Message: "Get all Contacts" });
};

export const getcontact = async (req, res) => {
  res.json({ Message: `Get Contact for ${req.params.id}` });
};

export const createContact = async (req, res) => {
  res.json({ message: "Create Contact" });
};

export const updateContact = async (req, res) => {
  res.json({ Message: `update contact for ${req.params.id}` });
};

export const deleteContact = async (req, res) => {
  res.json({ Message: `Delete Contact for ${req.params.id}` });
};
