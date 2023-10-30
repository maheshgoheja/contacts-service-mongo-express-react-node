const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

const result = dotenv.config({ debug: process.env.DEBUG });
if (result.error) {
  throw result.error;
}

const port = process.env.PORT || 3001;


// express app
const app = express();

// connect to mongodb

// Middleware

// middleware & static files
// app.use(express.static('public'))

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Third party middleware
app.use(morgan('dev'));


app.get('/', (request, response) => {
    return response.status(200).send({"message": "Contacts Service API is running successfully!"});
});

app.listen(port, () => {
    console.log(`App is listening to port: ${port}`);
});

// 404 page
app.use((req, res) => {
    const obj = {
        "status": "failed",
        "message": "404 error"
    }
    res.status(404).json(obj);
});



/*
// connect to mongodb
const dbURI = 'mongodb+srv://username:password@cluster0.uke9z6z.mongodb.net/mgblogs?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(5000))
    .catch((err) => console.log(err));
*/