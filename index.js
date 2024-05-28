{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const express = require('express');\
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