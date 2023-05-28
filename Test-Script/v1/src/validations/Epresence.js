const Joi = require("joi");

const createValidation = Joi.object({
  isApprove: Joi.bool(),
  type: Joi.string().required().min(2),
});



module.exports = {
  createValidation
};
