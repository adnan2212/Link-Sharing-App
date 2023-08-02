const User = require("../model/User");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  if (!users) return res.status(204).json({ message: "No users found" });
  res.json(users);
};

const createNewUser = async (req, res) => {
  if (!req?.body?.email || !req?.body?.password) {
    return res.status(400).json({ message: "Email or Password missing." }); //Bad Request
  }

  try {
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password,
    });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  if (!req?.body?.id)
    return res.status(400).json({ message: "Employee ID required." }); //Bad Request

  const user = await User.findOne({ _id: req.body.id }).exec();

  if (!user) {
    return res
      .status(204)
      .json({ message: `No user matches ID ${req.body.id}.` });
  }

  if (req.body?.firstname) user.firstname = req.body.firstname;
  if (req.body?.lastname) user.lastname = req.body.lastname;

  const updatedUser = await user.save();
  res.json(updatedUser);
};

const deleteUser = async (req, res) => {
  if (!req?.body?.id)
    return res.status(400).json({ message: "User ID required" }); //Bad Request

  const user = await User.findOne({ _id: req.body.id }).exec();

  if (!user) {
    return res
      .status(204)
      .json({ message: `No user matches ID ${req.body.id}.` });
  }

  const result = await user.deleteOne({ _id: req.body.id });
  res.json(result);
};

const getUser = async (req, res) => {
  if (!req?.cookies?.userId)
    return res.status(400).json({ message: "User ID required" }); //Bad Request
  // if (!req?.params?.id)
  //   return res.status(400).json({ message: "User ID required" }); //Bad Request

  const user = await User.findOne({ _id: req.cookies.userId }).exec();

  if (!user) {
    return res
      .status(204)
      .json({ message: `No user matches ID ${req.params.id}.` });
  }
  // res.json(user);
  const profileLink = user.profileLink;
  res.json({ profileLink }); // Return only the profileLink property
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
  getUser,
};
