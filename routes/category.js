var express = require('express');
var categoryController= require('../controller/categorycontroller')
var router = express.Router();

router.get('/',categoryController.getAll)


router.get("/inventory/category/:id",async(req,res)=>{


    var result = await categoryController.getById(req.params.id);
    res.render('displayitem.ejs',{item:result})

})


module.exports = router;