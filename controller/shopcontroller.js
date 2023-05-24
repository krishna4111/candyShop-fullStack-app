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

exports.buyOne=async (req,res,next)=>{
    try{
        let newQuantity;
        const candyId=req.params.id;
        console.log("candy id", candyId);
        shopmodel.findByPk(candyId)
        .then(async candy=>{
            console.log("candy detail" , candy);
            if(candy.quantity>=1){
                newQuantity=candy.quantity-1;
              const updated = await candy.update({quantity:newQuantity});
              res.status(200).json({
                update:updated
              })
            }
            
        })
    }
    catch(err){
        console.log(err);
    }
}
exports.buyTwo=(req,res,next)=>{
    try{
        let newQuantity;
        const candyId=req.params.id;
        shopmodel.findByPk(candyId)
        .then(async candy=>{
            console.log(candy);
            if(candy.quantity>=2){
                newQuantity=candy.quantity-2;
                const updated = await candy.update({quantity:newQuantity});
              res.status(200).json({
                update:updated
              })
            }
        })
    }
    catch(err){
        console.log(err);
    }
}
exports.buyThree=(req,res,next)=>{
    try{
        let newQuantity;
        const candyId=req.params.id;
        shopmodel.findByPk(candyId)
        .then(async candy=>{
            console.log(candy);
            if(candy.quantity>=3){
                newQuantity=candy.quantity-3;
                const updated = await candy.update({quantity:newQuantity});
              res.status(200).json({
                update:updated
              })
            }
        })
    }
    catch(err){
        console.log(err);
    }
}
