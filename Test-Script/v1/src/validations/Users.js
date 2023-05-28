const Joi = require("joi");

const createValidation = Joi.object({
  nama: Joi.string().required().min(3),
  password: Joi.string().required().min(8),
  email: Joi.string().email().required().min(8),
  npp: Joi.number(),
  npp_supervisor: Joi.number()
});


const loginValidation = Joi.object({
  password: Joi.string().required().min(8),
  email: Joi.string().email().required().min(8),
});

module.exports = {
  createValidation,
  loginValidation,
};
