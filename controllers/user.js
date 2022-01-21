const jwt = require("jsonwebtoken");

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
