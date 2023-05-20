const express=require('express');

const shopController=require('../controller/shopcontroller') 

const router=express.Router();

router.get('/shop/add-candy',shopController.showPage);

router.post('/shop/add-candy',shopController.addCantyDetails)

router.get('/shop/show-all-users',shopController.showAll);

router.post('/shop/buyOne/:id',shopController.buyOne)
//router.get('/shop/buyTwo/:id',shopController)
//router.get('/shop/buyThree/:id',shopController)

module.exports=router;