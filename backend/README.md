# PriHub Cognitive Support Backend

A comprehensive Node.js backend API for the PriHub Cognitive Support Platform, designed to provide services for individuals with cognitive disabilities.

## Features

- **User Management**: Authentication, profiles, and cognitive condition tracking
- **AI Chatbot**: Intelligent responses for cognitive disability support
- **Conditions Database**: Comprehensive information about various cognitive conditions
- **Resource Management**: Educational materials and support resources
- **Analytics**: Platform usage and accessibility analytics
- **Accessibility Features**: Compliance tracking and usage statistics
- **Contact System**: Support ticket and inquiry management

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (with Mongoose ODM)
- **JWT** - Authentication
- **Winston** - Logging
- **Helmet** - Security
- **Rate Limiting** - API protection

## Project Structure

```
backend/
├── config/
│   └── database.js          # Database configuration
├── middleware/
│   └── errorHandler.js      # Global error handling
├── models/
│   └── User.js              # User model and schema
├── routes/
│   ├── auth.js              # Authentication routes
│   ├── users.js             # User management
│   ├── chatbot.js           # AI chatbot API
│   ├── conditions.js        # Cognitive conditions
│   ├── resources.js         # Educational resources
│   ├── analytics.js         # Platform analytics
│   ├── accessibility.js     # Accessibility features
│   └── contact.js           # Contact support
├── utils/
│   ├── logger.js            # Logging configuration
│   └── asyncHandler.js      # Async error handling
├── uploads/                  # File uploads directory
├── logs/                     # Log files directory
├── .env.example             # Environment variables template
├── package.json             # Dependencies and scripts
├── server.js                # Main application file
└── README.md                # This file
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Environment Setup

1. Copy the environment variables template:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your configuration:
   - Database connection string
   - JWT secrets
   - Email configuration
   - API keys for external services

## Database Setup

1. Install MongoDB locally or use MongoDB Atlas
2. Update the `MONGODB_URI` in your `.env` file
3. The database will be created automatically on first run

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile

### Users
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user profile

### Chatbot
- `POST /api/chatbot/message` - Send message to AI chatbot
- `GET /api/chatbot/history/:userId` - Get chat history
- `GET /api/chatbot/stats` - Get chatbot statistics

### Conditions
- `GET /api/conditions` - Get all cognitive conditions
- `GET /api/conditions/:id` - Get specific condition
- `GET /api/conditions/search/:query` - Search conditions

### Resources
- `GET /api/resources` - Get educational resources
- `GET /api/resources/:id` - Get specific resource

### Analytics
- `GET /api/analytics/overview` - Get platform analytics
- `GET /api/analytics/demographics` - Get user demographics

### Accessibility
- `GET /api/accessibility/features` - Get accessibility features usage
- `GET /api/accessibility/compliance` - Get compliance statistics

### Contact
- `POST /api/contact` - Send contact message
- `GET /api/contact/messages` - Get contact messages (admin)

## Security Features

- JWT authentication
- Rate limiting
- Input sanitization
- XSS protection
- CORS configuration
- Helmet security headers

## Logging

- Structured logging with Winston
- Error logs: `logs/error.log`
- Combined logs: `logs/combined.log`
- Console output in development

## Testing

```bash
npm test
```

## Deployment

1. Set environment variables for production
2. Build the application
3. Deploy to your preferred hosting platform

## Environment Variables

See `.env.example` for all required environment variables.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team or use the contact form in the application.
