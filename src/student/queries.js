const getStudents = 'SELECT * FROM students'
const getStudentsById = 'SELECT * FROM students WHERE id = $1'
const checkEmailExists = 'SELECT s FROM students s WHERE s.email = $1' 
const addStudent = 'INSERT INTO students (first_name, last_name, email, age, dob) VALUES ($1, $2, $3, $4, $5)'
const editStudent = 'UPDATE students SET first_name = $1, last_name = $2 WHERE id = $3'
const deleteStudent = 'DELETE FROM students WHERE id = $1'

module.exports = {
  getStudents,
  getStudentsById,
  checkEmailExists,
  addStudent,
  deleteStudent,
  editStudent,
}