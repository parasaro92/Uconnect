const express = require("express");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const crypto = require(`crypto`);
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const requireLogin = require("../middleware/requireLogin");
const router = express.Router();
const nodemailer = require(`nodemailer`);
const sendgridTransport = require(`nodemailer-sendgrid-transport`);

//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

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        "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",
    },
  })
);

router.get("/protected", requireLogin, (req, res) => {
  res.send("hello user");
});

router.post("/Signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    return res.status(422).json({ Error: " Please add all the fields" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (savedUser) {
      return res
        .status(422)
        .json({ error: "user already exists with that email" });
    }
    bcrypt
      .hash(password, 12)
      .then((hashedpassword) => {
        const user = new User({
          name,
          email,
          password: hashedpassword,
        });

        user
          .save()
          .then((user) => {
            transporter.sendMail({
              to: user.email,
              from: "no-reply@insta.com",
              subject: "Sign up success",
              html: "<h1>Welcome to UConnect</h1>",
            });
            res.json({ message: "Saved Successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.post("/Signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Please add email or password" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid email or password" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          //res.json({message:'Signed in Successfully'})
          const token = jwt.sign(
            { _id: savedUser._id },
            process.env.JWT_SECRET
          );
          const { _id, name, email, followers, following } = savedUser;
          res.json({ token, user: { _id, name, email, followers, following } });
        } else {
          return res.status(422).json({ error: "Invalid email or password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.post("/reset-password", (req, res) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
    }
    const token = buffer.toString("hex");
    User.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        return res
          .status(422)
          .json({ error: "User dont exist with this email" });
      }
      user.resetToken = token;
      user.expireToken = Date.now() + 3600000;
      user.save().then((result) => {
        transporter.sendMail({
          to: user.email,
          from: "no-reply@insta.com",
          subject: "Password Reset",
          html: `<p>
          You requested for password reset </p>
          <h5> Click on this <a href="http://localhost:3000/reset/${token}>link</a> to reset the password</h5>`,
        });
        res.json({ message: "Check your email" });
      });
    });
  });
});

router.post("/new-password", (req, res) => {
  const newPassword = req.body.password;
  const sentToken = req.body.token;
  User.findOne({
    resetToken: sentToken,
    expireToken: { $gt: Date.now() },
  })
    .then((user) => {
      if (!user) {
        return res.status(422).json({ error: "Try Again session expired" });
      }
      bcrypt.hash(newPassword, 12).then((hashedpassword) => {
        (user.password = hashedpassword),
          (user.resetToken = undefined),
          (user.expireToken = undefined),
          user.save().then((saveduser) => {
            res.json({ message: "Password updated success" });
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
