const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    res.status(200).send('success');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

module.exports = router;