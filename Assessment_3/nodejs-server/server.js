const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;
// const router = require('routes/resources')
// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/resourceDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const resourceRoutes = require('./routes/resource');
app.use('/api/resources', resourceRoutes);

// Root endpoint for documentation
app.get('/', (req, res) => {
  res.send('Hoadrea test API Endpoints: /api/resources');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const router = require('./routes/resource');
app.use(router)

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Resource API',
      version: '1.0.0',
      description: 'API documentation for the Resource API',
    },
  },
  apis: ['./routes/*.js'], // Files containing annotations
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
