const bcrypt = require("bcrypt");
const jwtToken = require("jsonwebtoken");
const UserModel = require("../models/UserSchema");
const object = {
  postSignup: async (req, res) => {
    console.log(req.body, " from body");
    const {
      name,
      email,
      password,
      phoneNumber,
      dateOfBirth,
      assembly,
      constituency,
      district,
      panchayath,
      municipality,
      corporation,
    } = req.body;
    try {
      const bcryptPassword = await bcrypt.hash(password, 10);

      const saveUser = await UserModel({
        name: name,
        email: email,
        password: bcryptPassword,
        phoneNumber: phoneNumber,
        dateOfBirth: dateOfBirth,
        assembly: assembly,
        constituency: constituency,
        district: district,
        panchayath: panchayath,
        municipality: municipality,
        corporation: corporation,
      });
      saveUser.save();

      const token = jwtToken.sign(email, process.env.JWT_SECRET_KEY);
      res.status(200).json({ message: "User saved successfully", token });
    } catch (err) {
      console.error(err);
    }
  },
};

module.exports = object;
