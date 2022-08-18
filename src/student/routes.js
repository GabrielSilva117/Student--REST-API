const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getStudents)
router.get('/:id', controller.getStudentsById)
router.post('/add', controller.addStudent)
router.post('/del/:id', controller.deleteStudent)
router.put('/edit/:id', controller.editStudent)

module.exports = router