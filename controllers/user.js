const jwt = require("jsonwebtoken");
const { authSchema } = require("../helpers/joiValidation");

exports.login = (req, res) => {
  if (req.body.email === "user@gmail.com" && req.body.password === "user123") {
    const secret = "62csdfhsdhshsfgh";
    const user = {
      id: 1,
      name: "egemen",
      email: "egemenkar@gmail.com",
      role: 1,
      user_type: "admin",
    };
    const token = jwt.sign(user, secret, { expiresIn: "7d" });
    res.send({
      status: true,
      jwt: {
        token: token,
        expiresIn: "7d",
      },
      user,
    });
  } else {
    let response = {
      status: false,
    };
    res.status(200).send(response);
  }
};

exports.joiValidate = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await authSchema.validateAsync(req.body);
    next();
  } catch (error) {
    if (error.isJoi === true) error.status = 422;
    next(error);
  }
};
