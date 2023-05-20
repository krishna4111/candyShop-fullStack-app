const shopmodel=require('../model/shopmodel');

const path=require('path');

exports.showPage=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','view','cadyshop.html'))
}

exports.addCantyDetails=async (req,res,next)=>{
    try{
        const detail= await shopmodel.create({
            candy:req.body.chocolate,
            description:req.body.desc,
            price:req.body.price,
            quantity:req.body.quantity
        })
    
        res.status(201).json({newExpense:detail});
    }
    catch(err){
        res.status(500).json({
            error:err
        })
    }
}

exports.showAll=async (req,res,next)=>{
try{
  const users=  await shopmodel.findAll();
    res.status(200).json({ allusers : users });
}
catch(err){
    res.status(500).json({
        error:err
    })
}
}

exports.buyOne=(req,res,next)=>{
    try{
        const candyId=req.body.id;
        shopmodel.findByPk(candyId)
        .then(candy=>{
            console.log(candy);
        })
    }
    catch(err){
        console.log(err);
    }
}