const express = require("express");
const authenticate = require("../middlewares/authenticate")
const { index, create, update } = require("../controllers/Epresence");
const validate = require("../middlewares/validate");
const { createValidation, updateValidation } = require("../validations/Epresence");
const router = express.Router();

router.route("/").get(index);
router.route("/").post(authenticate,validate(createValidation), create);
router.route("/:id").patch(authenticate, update);

module.exports = router;
