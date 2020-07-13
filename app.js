// Load app aserver using express
const express = require("express");
const app = express();

const dotenv = require("dotenv");
// const bodyParser = require("body-parser");
// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



dotenv.config();

 



app.get('/', (req, res) => {
    console.log('Responding to root route')
    res.send('<h2>Hello from Root!!!</h2>')
});

// Movies API routes
app.use('/api/movies', require('./views/api/routes'))

// app.get('/users', (req, res) => {
//     const user1 = {'ID': 100, firstName: 'Andrew', lastName: 'Macfish'};
//     const user2 = {'ID': 101, firstName: 'John', lastName: 'Okere'};
//     res.json([user1, user2]);
// })

// Enviromemt variable PORT via Process Object 3000 || 7000
const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}...`)
})


// function myName(name) {
//      console.log(`Hello ${name}`);
// }

// myName('Charles');

// console.log(module);