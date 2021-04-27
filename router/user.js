const express = require('express')
const router = express.Router();
const controller = require('../controller/user')


console.log('router')
router.route('/').post(controller.post)
// router.route('/').post( controller.post).get(controller.findAll)
// router.route('/:id').delete(controller.delete).get(controller.findOne);
 

module.exports = router 