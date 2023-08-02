const User = require("../model/User");

const handleLogout = async (req, res) => {
  // On client, also delete the accessToken

  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No Content
  const refreshToken = cookies.jwt;

  //is refreshToken in DB?
  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true });
    return res.sendStatus(204); //No Content
  }

  //delete refreshToken from DB
  foundUser.refreshToken = "";
  const result = await foundUser.save();
  console.log("logC L20", result);

  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.clearCookie("userId", { httpOnly: true, sameSite: "None", secure: true });
  res.sendStatus(204); //No Content
};

module.exports = { handleLogout };
