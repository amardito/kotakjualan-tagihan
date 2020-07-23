const express = require('express');
const router = express.Router();
const Bill = require('../model/bill')

router.post('/', async(req, res, next) => {
    const bill = new Bill({
        idToko : req.body.idToko,
        idAnggota : req.body.idAnggota,
        createdAt : new Date(),
        item : req.body.item,
        status : "true",
        totalTagihan : req.body.totalTagihan
    })
    await bill.save();
    res.status(201).json({
        created : bill
    })
});

router.get('/', async(req, res, next) => {
    await Bill.find()
    .select("idToko idAnggota item status totalTagihan")
    .then(doc => {
        res.status(200).json(doc);
    });
})

router.put('/lunas/:tagihan', async(req, res, next) => {
    await Bill.updateOne({_id : req.params.tagihan}, {$set : {status : "false"}})
    res.status(200).send({updating : "status to false"});
})
module.exports = router;