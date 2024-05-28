const express = require('express');\
const mongoose = require('mongoose');\
const app = express();\
const port = process.env.PORT || 3000;\
\
// Middleware\
app.use(express.json());\
\
// MongoDB connection\
const mongoURI = process.env.MONGODB_URI || 'yourMongoDBURI';\
mongoose.connect(mongoURI, \{ useNewUrlParser: true, useUnifiedTopology: true \})\
  .then(() => console.log('MongoDB connected'))\
  .catch(err => console.log(err));\
\
// Basic route\
app.get('/', (req, res) => \{\
  res.send('Union Delegate Pro Backend');\
\});\
\
// Start server\
app.listen(port, () => \{\
  console.log(`Server running on port $\{port\}`);\
\});}
