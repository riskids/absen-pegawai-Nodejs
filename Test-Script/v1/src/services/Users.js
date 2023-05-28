const Users = require("../models/Users");
const bcrypt = require('bcrypt');

const list = () => {
  return Users.findAll();
};

const insert = async (data) => {
  const user = await Users.create(data);
  return user;
};

const loginUser = async (loginData) => {
  
  const user = await Users.findOne({ where: {email:loginData.email} });
  if (!user) {
    return false;
  }
  // Verifikasi password menggunakan bcrypt
  const isPasswordValid = await bcrypt.compare(loginData.password, user.password);
  if (!isPasswordValid) {
    return false;
  }
  
  
  return user;
};

module.exports = {
  list,
  insert,
  loginUser,
};
