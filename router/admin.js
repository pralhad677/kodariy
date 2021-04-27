const express = require('express')
const router = express.Router();
const controller = require('../controller/admin')


console.log('router')
router.route('/signup').post(controller.post)
router.route('/login').post(controller.adminLogin)
// router.route('/').post( controller.post).get(controller.findAll)
// router.route('/:id').delete(controller.delete).get(controller.findOne);
 

module.exports = router 