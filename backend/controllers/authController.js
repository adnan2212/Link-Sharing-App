const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  console.log("🎁REQUEST OBJECT {} -->", req);
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Missing email or password" });

  const foundUser = await User.findOne({ email }).exec();
  if (!foundUser) {
    return res.status(401).json({ error: "Unauthorized line 16" });
  }
  console.log("FOUND USER🟢", foundUser._id);

  //evalute the password
  const match = await bcrypt.compare(password, foundUser.password);
  if (match) {
    const userId = foundUser._id;
    const profileLink = foundUser.profileLink;
    //create JWTs
    const accessToken = jwt.sign(
      {
        UserInfo: {
          email: foundUser.email,
          id: foundUser._id,
          profileLink: foundUser.profileLink,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    const refreshToken = jwt.sign(
      {
        UserInfo: {
          email: foundUser.email,
        },
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    //saving the refresh token with current user
    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();
    console.log("From authCon line 46", result);

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000, //1 day
    });

    res.cookie("userId", userId, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000, //1 day
    });

    res.cookie("profileLink", profileLink, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000, //1 day
    });

    // include user ID
    res.json({ accessToken, userId, profileLink });
    // res.status(200).json({ success: `Welcome ${user}!` });
  } else {
    res.status(401).json({ error: "Unauthorized line 29" });
  }
};

module.exports = { handleLogin };
