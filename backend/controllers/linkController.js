const User = require("../model/User");
const Link = require("../model/Link");

const createLink = async (req, res) => {
  console.log("FROM CREATE LINK {} ->", req);
  console.log("✔✔✔✔✔");
  // console.log("🍪🍪🍪", req.cookies);
  if (!req?.cookies?.userId || !req?.body?.linkTitle || !req?.body?.url) {
    return res.status(400).json({ message: "linkTitle or url missing." });
  }

  try {
    const newlink = await Link.create({
      linkTitle: req.body.linkTitle,
      url: req.body.url,
    });

    const updatedUser = await User.findByIdAndUpdate(
      req.cookies.userId,
      { $push: { links: newlink._id } },
      { new: true }
    );

    console.log("Updated user:", updatedUser);

    res.status(201).json(newlink);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteLink = async (req, res) => {
  console.log("FROM DELETE LINK CONTROLLER {} ->", req);
  console.log("📌📋📋📋📌");
  if (!req?.cookies?.userId) {
    return res.status(400).json({ message: "userId missing." });
  }

  const { linkId } = req.params;
  if (!linkId) return res.status(400).json({ error: "linkId missing" });

  try {
    const deletedLink = await Link.findByIdAndDelete(linkId);
    if (!deletedLink) {
      return res.status(404).json({ error: "Link not found" });
    }

    const updateUser = await User.findByIdAndUpdate(
      req.cookies.userId,
      {
        $pull: { links: linkId },
      },
      { new: true }
    );

    if (!updateUser) {
      return res.status(404).json({ error: "User not found" });
    }

    console.log("Deleted link:", deletedLink);
    console.log("Updated user:", updateUser);

    res.status(200).json({ message: "Link deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getLinksByUserId = async (req, res) => {
  if (!req?.cookies?.userId) {
    return res.status(400).json({ message: "userId missing." });
  }
  try {
    const { userId } = req.cookies;
    const links = await User.find({ _id: userId })
      .populate({
        path: "links",
        model: "Link",
      })
      .select({
        links: 1,
        _id: 0,
      });

    res.status(200).json(links);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//-----------------------------------------------------------------

const getAllLinks = async (req, res) => {
  try {
    const links = await Link.find();
    res.status(200).json(links);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getLinkById = async (req, res) => {
  try {
    const { id } = req.params;
    const link = await Link.findById(id);
    if (!link) {
      return res.status(404).json({ error: "Link not found" });
    }
    res.status(200).json(link);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateLink = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, linkTitle, url } = req.body;
    const updatedLink = await Link.findByIdAndUpdate(
      id,
      { userId, linkTitle, url },
      { new: true }
    );
    if (!updatedLink) {
      return res.status(404).json({ error: "Link not found" });
    }
    res.status(200).json(updatedLink);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createLink,
  getLinksByUserId,
  deleteLink,
  getAllLinks,
  updateLink,
  getLinkById,
};
