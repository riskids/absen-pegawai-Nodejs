const JWT = require("jsonwebtoken");
const bcrypt = require('bcrypt');


const passwordToHash = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    throw new Error('Failed to hash password');
  }
};


const generateAccessToken = (user) => {
  return JWT.sign({name:user.email, ...user}, process.env.ACCESS_TOKEN_KEY, {expiresIn:"1w"});
}

const generateRefreshToken = (user) => {
  return JWT.sign({name:user.email, ...user}, process.env.REFRESH_TOKEN_KEY);
}


module.exports = {
  passwordToHash,
  generateAccessToken,
  generateRefreshToken,
};
