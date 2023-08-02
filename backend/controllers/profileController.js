const Profile = require("../model/Profile");
const User = require("../model/User");
const Link = require("../model/User");

const getProfileDetails = async (req, res) => {
  try {
    if (!req?.cookies?.userId)
      return res.status(400).json({ error: "userId required." });

    const userId = req.cookies.userId;
    const profile = await Profile.findOne({ userId }).exec();

    if (!profile) {
      return res.status(404).json({ error: "Profile not found." });
    }

    const { firstName, lastName, email, profileImage } = profile;
    res.json({ firstName, lastName, email, profileImage });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addProfileDetails = async (req, res) => {
  try {
    if (!req?.cookies?.userId)
      return res.status(400).json({ error: "userId required." });

    const { firstName, lastName, email } = req.body;
    const userId = req.cookies.userId;
    const existingProfile = await Profile.findOne({ userId }).exec();
    const filename = req.file
      ? req.file.filename
      : existingProfile.profileImage;

    if (!req.file && !existingProfile) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    if (!filename || !firstName || !lastName || !email)
      return res.status(400).json({ error: "All fields are required." });

    // If an existing profile is found, update it; otherwise, create a new one.
    let result;
    if (existingProfile) {
      result = await Profile.findOneAndUpdate(
        { userId },
        {
          profileImage: filename,
          firstName,
          lastName,
          email,
        },
        { new: true }
      ).exec();
    } else {
      // Check for duplicate email in the DB
      const duplicate = await Profile.findOne({ email }).exec();
      if (duplicate) {
        return res.sendStatus(409); // Conflict
      }

      result = await Profile.create({
        userId,
        profileImage: filename,
        firstName,
        lastName,
        email,
      });
    }

    console.log(result);

    console.log(result);

    res.status(201).json({ success: `All Details have been saved!` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProfileByLink = async (req, res) => {
  try {
    const profileLink = req.params.profileLink;

    // Find the user based on the profile link
    const user = await User.findOne({ profileLink });

    if (!user) {
      // Handle case when the profile link does not correspond to any user
      return res.status(404).json({ message: "Profile not found" });
    }

    // Retrieve user's profile details from the associated profile document
    const profile = await Profile.findOne({ userId: user._id });

    if (!profile) {
      return res.status(404).json({ message: "Profile details not found" });
    }

    const { firstName, lastName, email, profileImage } = profile;

    // Fetch the user's links from the links document
    /*   const links = await User.find({ _id: user._id }).populate({
      path: "links",
      model: "Link",
    }); */
    const links = await Link.find({ _id: user._id })
      .populate({
        path: "links",
        model: "Link",
      })
      .select({
        links: 1,
        _id: 0,
      });

    // Return the user's data including links, first name, last name, and image URL
    res.json({
      user: {
        profileImage,
        firstName,
        lastName,
        email,
        links,
      },
    });
  } catch (err) {
    // Handle error...
    res.status(500).json({ message: "Server Error" });
  }
};

// const getProfileByLink = async (req, res) => {
//   try {
//     const profileLink = req.params.profileLink;

//     // Find the user based on the profile link
//     const user = await User.findOne({ profileLink });

//     if (!user) {
//       // Handle case when the profile link does not correspond to any user
//       return res.status(404).json({ message: "Profile not found" });
//     }

//     // Retrieve user's profile details from the associated profile document,
//     // and populate the 'links' array with actual link documents
//     const profile = await Profile.findOne({ userId: user._id }).populate(
//       "links"
//     );

//     if (!profile) {
//       return res.status(404).json({ message: "Profile details not found" });
//     }

//     const { firstName, lastName, email, profileImage, links } = profile;

//     // Return the user's data including links, first name, last name, and image URL
//     res.json({
//       user: {
//         profileImage,
//         firstName,
//         lastName,
//         email,
//         links,
//         // links: links.map((link) => ({
//         //   linkTitle: link.linkTitle,
//         //   url: link.url,
//         // })),
//       },
//     });
//   } catch (err) {
//     // Handle error...
//     res.status(500).json({ message: "Server Error" });
//   }
// };

module.exports = { getProfileDetails, addProfileDetails, getProfileByLink };
