const { name } = require('ejs');
var itemModel = require('../model/items')

module.exports.insret=(req,res)=>{
    try {
            let itemData= req.body
            let file = req.file
            console.log(file);
    itemModel.insertMany({ 
    name: `${itemData.name}`,  
    description: `${itemData.description}`,
    category: `${itemData.category}`,
    price: `${itemData.price}`,
    stock:`${itemData.stock}` ,
     image:file.filename
    // file.path
});
     res.send("item add ")
    }catch{
        res.status(500).send();
    }
}
module.exports.get=(req,res)=>{
        res.render('index.ejs')
}
module.exports.getAll=(req,res)=>{
    itemModel.find({}, (err, result)=>{
        if(err) throw err;
        res.render('view.ejs', {result : result})
        // res.status(200).send(result)
     });
    }

// module.exports.remove=(req,res)=>{
//     itemModel.deleteOne( { "_id" : ObjectId("636e0650106fb61c2ac81607") } ,(err,result)=>{
//         if(err) throw err;
//         res.render('view.ejs',{result:result})
//     })
// }
module.exports.update=(req,res)=>{
//    let findItem = itemModel.find({"name" :`${req.body.name}`});
//    console.log(findItem)
itemModel.find({"name":`${req.body.name}`}).lean().exec(function(error, records) {
    records.forEach(function(record) {
      console.log(record._id);
      var itemid= record._id;
      itemModel.findByIdAndUpdate (itemid,  {name: req.body.newname },function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.render("Data updated");
            console.log("Data updated!");
        }
    });  
  }
    )
})
}

  module.exports.getUpdate=(req,res)=>{
    res.render('updateitem.ejs')
}

     module.exports.getById =  (id)=> {
        return new Promise((resolve) => {
         var result=[]
           itemModel.find().then((data)=>{
           for(var i=0;i<data.length;i++){
                                    if(data[i]._id==id){
                                        result.push(data[i])
                                    }
                                }
                                console.log(result)
                                resolve(result)
                            })
                            } )
                    }



                    module.exports.update=(req,res)=>{
//    let findItem = itemModel.find({"name" :`${req.body.name}`});
//    console.log(findItem)
itemModel.find({"name":`${req.body.name}`}).lean().exec(function(error, records) {
    records.forEach(function(record) {
      console.log(record._id);
      var itemid= record._id;
      itemModel.findByIdAndUpdate (itemid,  {name: req.body.newname },function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send("Data updated");
            console.log("Data updated!");
        }
    });  
  }
    )
})
}
module.exports.getDelete=(req,res)=>{
    res.render('delete.ejs')
}

module.exports.delete=(req,res)=>{
    //    let findItem = itemModel.find({"name" :`${req.body.name}`});
    //    console.log(findItem)
    itemModel.find({"name":`${req.body.name}`}).lean().exec(function(error, records) {
        records.forEach(function(record) {
          console.log(record._id);
          var itemid= record._id;
          itemModel.findByIdAndDelete (itemid,function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send("Data Deleted!");
                console.log("Data updated!");
            }
        });  
      }
        )
    })
    }