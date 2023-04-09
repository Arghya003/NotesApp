const express= require('express')
const router = express.Router();
const dashboardController= require('../controllers/dashboardController')


// dashboard routes

router.get('/dashboard',dashboardController.homepage)


module.exports=router;