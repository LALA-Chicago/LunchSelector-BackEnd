const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  // res.sendFile(path.join(__dirname, '../')) : look at hw 21
});

module.exports = router;