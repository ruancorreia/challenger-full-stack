const { check, validationResult, body } = require("express-validator");
const validateContactForm = [
  check("email").isEmail().withMessage("Entre com um email válido"),
  check("name").isLength({ min: 3 }).withMessage("Campo nome não pode ser vazio!"),
  check("message").notEmpty().withMessage("Mensagem não pode ser vazia!"),
];


module.exports = validateContactForm;
