var express = require('express');
var itemController= require('../controller/itemcontroller')
var router = express.Router();

/* GET home page. */
router.post('/', itemController.insret) 
router.get('/new',itemController.get)
router.get('/view',itemController.getAll)
router.get('/update',itemController.getUpdate)
router.post('/update',itemController.update)
router.get('/delete',itemController.getDelete)
router.post('/delete',itemController.delete)
router.get("/inventory/items/:id",async(req,res)=>{
    var result = await itemController.getById(req.params.id);
    res.render('viewitem.ejs',{result:result})

})

//router.delete('/delete',itemController.remove)
module.exports = router;
