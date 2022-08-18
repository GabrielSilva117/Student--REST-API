const express = require('express')
const res = require('express/lib/response')
const studentsRouter = require('./src/student/routes')
const app = express()
const port = 3000

// Middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Home page')
})

app.use('/api/v1/students', studentsRouter)

app.listen(port, (
  console.log('Server runnig on port ' + port)
))