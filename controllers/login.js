// check username, password in post(login) request
// if exist create new JWT
// send back to front-end
// setup authentication so only the request with JWT can access the dashboard

const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../errors/index");

const login = async (req, res) => {
  const { username, password } = req.body;
  // mongoose validation
  // joi
  // check in the controller

  if (!username || !password) {
    throw new BadRequestError("Please provide a username and password");
  }
  // just for demo, normally provided by DB!
  const id = new Date().getDate();

  // try to keep payload small, better experience for user
  // just for demo, in production use long, complex and unguessable string value!
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.staus(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const lucyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized date, your lacky number is ${lucyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
