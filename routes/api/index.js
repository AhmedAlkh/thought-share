const router = require('express').Router();
const userRoutes = require('./user-routes');
// thoughtRoutes

router.use('/users', userRoutes);
// thoughtRoutes

module.exports = router;