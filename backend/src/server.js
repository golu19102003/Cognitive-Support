const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const application = express();
const SERVER_PORT = process.env.PORT || 5000;

application.use(helmet());
application.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

const requestLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: 'Excessive requests detected. Please try again later.'
});
application.use('/api/', requestLimiter);

application.use(express.json({ limit: '10mb' }));
application.use(express.urlencoded({ extended: true }));

application.get('/', (request, response) => {
  response.json({
    message: 'ResidentialHub API Service',
    version: '2.0.0',
    status: 'operational',
    timestamp: new Date().toISOString()
  });
});

application.get('/api/health', (request, response) => {
  response.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

application.use('/api/auth', require('./routes/auth'));
application.use('/api/users', require('./routes/users'));
application.use('/api/visitors', require('./routes/visitors'));
application.use('/api/finance', require('./routes/finance'));
application.use('/api/communication', require('./routes/communication'));
application.use('/api/administration', require('./routes/administration'));
application.use('/api/amenities', require('./routes/amenities'));

application.use((error, request, response, next) => {
  console.error(error.stack);
  response.status(500).json({
    message: 'An unexpected error occurred!',
    error: process.env.NODE_ENV === 'development' ? error.message : 'Service unavailable'
  });
});

application.use('*', (request, response) => {
  response.status(404).json({
    message: 'Requested resource not found'
  });
});

application.listen(SERVER_PORT, () => {
  console.log(`ResidentialHub service initialized on port ${SERVER_PORT}`);
  console.log(`Operating environment: ${process.env.NODE_ENV || 'development'}`);
});
