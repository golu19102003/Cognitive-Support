const express = require('express');
const userManagementRouter = express.Router();

userManagementRouter.get('/', (request, response) => {
  response.json({
    message: 'User management endpoint - pending implementation'
  });
});

module.exports = userManagementRouter;
