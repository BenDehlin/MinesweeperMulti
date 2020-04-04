require('dotenv').config({path: __dirname + "/../.env"})
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const app = express()

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

// const authCtrl = require("./controllers/authController")
// const gameCtrl = require('./controllers/gameController')

app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 }
}))

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log("Database Connected")
  app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))
})

//ENDPOINTS
// app.post("/auth/register", authCtrl.register)
// app.post("/auth/login", authCtrl.login)
// app.post("/auth/logout", authCtrl.logout)
// app.get("/auth/user", authCtrl.getUser)