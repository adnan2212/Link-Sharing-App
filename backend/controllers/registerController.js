const User = require("../model/User");
const bcrypt = require("bcrypt");
const generateProfileLink = require("../utils/generateProfileLink");

const handleNewUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "All fields are required." });

  // check for duplicates usernames in the DB
  const duplicateEmail = await User.findOne({ email }).exec();
  if (duplicateEmail) return res.sendStatus(409); // conflict

  // Generate a unique profile link
  const profileLink = generateProfileLink();

  try {
    //encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    //create and store the new user
    const result = await User.create({
      email: email,
      password: hashedPassword,
      profileLink,
    });

    console.log(result);

    // res.status(201).json({ success: `New user ${email} created!`});
    res.status(201).json({ profileLink });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { handleNewUser };
