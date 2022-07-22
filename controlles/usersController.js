const jwt = require('jsonwebtoken');

const login = (req, res) => {
  const data = req.body;
  const { ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

  if (data.email === ADMIN_EMAIL && data.password === ADMIN_PASSWORD) {
    const token = jwt.sign({ email: ADMIN_EMAIL }, process.env.JWT_SECRET);
    res.send(token);
  } else {
    res.status(401).send('WRONG EMAIL OR PASSWORD');
  }
}

const checkToken = (req, res) => {
  const { token } = req.body;

  jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
    if (err) {
      res.status(403).send('WRONG TOKEN');
    }

    if (decoded) {
      res.send('OK')
    }
  });
}

module.exports = {
  login,
  checkToken,
}
