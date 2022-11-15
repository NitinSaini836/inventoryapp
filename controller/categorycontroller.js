                const Category = require("../model/category");
const itemModel = require("../model/items");
                module.exports.getAll=(req,res)=>{
                    Category.find({}, (err, result)=>{
                        if(err) throw err;
                        res.render('category.ejs', {category : result})
                        // res.status(200).send(result)
                     });
                    }
                
                 module.exports.getById =  (id)=> {
                        return new Promise((resolve) => {
                            var result=[]
                            itemModel.find().then((data)=>{
                                for(var i=0;i<data.length;i++){
                                    if(data[i].category==id){
                                        result.push(data[i])
                                    }
                                }
                                console.log(result)
                                resolve(result)
                            })
                            } )
                    }