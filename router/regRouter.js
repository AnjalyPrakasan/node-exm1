const express = require('express')
const router = express.Router()

//importing cntrl page
const {addData,addDataAction,list} = require('../control/regCtrl')

router.route('/addData').get(addData)
router.route('/addDataAction').post(addDataAction)
router.route('/list').get(list)

//exporting router
module.exports = router