const pool = require('../../db')
const queries = require('./queries')
const { get } = require("express/lib/response")

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (err, results) => {
    if(err) throw err
    res.status(200).json(results.rows)
  })
}

const getStudentsById = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(queries.getStudentsById, [id], (err, results) => {
    if(err) throw err
    res.status(200).json(results.rows)
  })
}

const addStudent = (req, res) => {
  const { first_name, last_name, email, age, dob } = req.body
  // check if email exists
  pool.query(queries.checkEmailExists, [email], (err, results) => {
    if (results.rows.length) {
      res.send('Email already exists')
    }
    // add student to db
    pool.query(queries.addStudent, [first_name, last_name, email, age, dob], (err, results) => {
      if(err) throw err 
      res.status(200).send('Student created successfully')
    })
  })
}

const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(queries.getStudentsById, [id], (err, results) => {
    const Nostudentfound = !results.rows.length
    if(Nostudentfound){
      res.send('Student doesn´t exists')
    }
    pool.query(queries.deleteStudent, [id], (err, results) => {
      if(err) throw err
      res.status(200).send('Student deleted successfully')
    })
  })
}

const editStudent = (req, res) => {
  const id = parseInt(req.params.id)
  const { first_name, last_name } = req.body

  pool.query(queries.getStudentsById, [id], (err, results) => {
    const noStutentfound = !results.rows.length
    if(noStutentfound){
      res.send('Student doesn´t exists / Invalid Id')
    }
    pool.query(queries.editStudent, [first_name, last_name, id], (err, results) => {
      if(err) throw err
      res.status(200).send('Student updated successfully')
    })
  })
}

module.exports = {
  getStudents,
  getStudentsById,
  addStudent,
  deleteStudent,
  editStudent,
}