const express=require('express');

const shopController=require('../controller/shopcontroller') 

const router=express.Router();

router.get('/shop/add-candy',shopController.showPage);

router.post('/shop/add-candy',shopController.addCantyDetails)

router.get('/shop/show-all-users',shopController.showAll);

router.put('/shop/buyOne/:id',shopController.buyOne)
router.put('/shop/buyTwo/:id',shopController.buyTwo)
router.put('/shop/buyThree/:id',shopController.buyThree)


module.exports=router;