const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./data/db-config')

const plantsRouter = require('./plants/plants-router')
const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/users-router')

// function getAllUsers() { return db('users') }

// async function insertUser(user) {
//   // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
//   // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
//   const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
//   return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
// }

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/users', usersRouter)
server.use('/api/auth', authRouter )
server.use('/api/plants', plantsRouter )


server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
     message: err.message,
     stack: err.stack,
  });
});



module.exports = server
