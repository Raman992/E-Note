const jwt = require('jsonwebtoken');
const JWT_SIGNATURE = 'testing';

const fetchuser = (req, res, next) => {
  const token = req.header('auth-token');
  
  if (!token) {
    // Stop execution here
    return res.status(401).send({ error: "Please authenticate using a valid token" });
  }

  try {
    const data = jwt.verify(token, JWT_SIGNATURE);
    req.userdata = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Unauthorized access denied" });
  }
};

module.exports = fetchuser;
