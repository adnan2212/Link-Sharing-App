require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const corsOptions = require("./config/corsOptions");
const credentials = require("./middleware/credentials");
const errorHandler = require("./middleware/errorHandler");
const verifyJWT = require("./middleware/verifyJWT");
const connectDB = require("./config/dbConn");
const auth = require("./routes/auth");
const register = require("./routes/register");
const users = require("./routes/api/user");
const link = require("./routes/api/link");
const profile = require("./routes/api/profile");
const root = require("./routes/root");
const refresh = require("./routes/refresh");
const logout = require("./routes/logout");
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

//Handle options credentials check - before CORS!
//and fetch cookies credentials requirement
app.use(credentials);

//cross origin resource sharing
app.use(cors(corsOptions));

//built-in middleware to handle urlencoded data
//in other words, form data:
//"content-type: application/x-ww-form-urlencoded"
app.use(express.urlencoded({ extended: false }));

//built-in middleware to handle json data
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//serve static files
app.use("/", express.static(path.join(__dirname, "/public")));

// Make uploads folder public
// app.use("/uploads", express.static("uploads"));
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//routes
app.use("/", root);
app.use("/register", register);
app.use("/auth", auth);
app.use("/refresh", refresh);
app.use("/logout", logout);
app.use("/profile", profile);

app.use(verifyJWT);
app.use("/users", users);
app.use("/link", link);

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 not Found" });
  } else {
    res.type("txt").send("404 not Found");
  }
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
