const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const dotenv = require("dotenv");
const cookieSession = require("cookie-session");
//const connect = require('./config/db.js');
//const mongoose = require("mongoose");
dotenv.config();
const passportSetup = require("./passport");

const authRoute = require("./routes/auth.js");

//connect mongodb
// mongoose.set("strictQuery", false);
// mongoose.connect(process.env.MONGO_URL, {});

// const connection = mongoose.connection;

// connection.once("open", () => {
//   console.log("MongoDB connected successfully");
// });

// app.use(
//   session({
//     secret: "mysecret",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true },
//   })
// );

app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 100,
	})
);


app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    method: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/auth", authRoute);

const Port = 5000;

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
