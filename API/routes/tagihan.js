const express = require('express');
const router = express.Router();
const Bill = require('../model/bill');
const bill = require('../model/bill');

router.post('/', async(req, res, next) => {
    const bill = new Bill({
        namaToko : req.body.namaToko,
        idAnggota : req.body.idAnggota,
        createdAt : new Date(),
        item : req.body.item,
        status : "true",
        totalTagihan : req.body.totalTagihan
    });
    await bill.save();
    res.status(201).json({
        created : bill
    });
});

router.get('/', async(req, res, next) => {
    res.status(200).json(
        await Bill.find({status : true})
        .select("namaToko idAnggota item status totalTagihan")

    );
});

router.get('/:idAnggota', async(req, res, next) => {
    res.status(200).json(
        await bill.find({idAnggota : req.params.idAnggota})
    );
});

router.put('/lunas/:tagihan', async(req, res, next) => {
    await Bill.updateOne({_id : req.params.tagihan}, {$set : {status : "false"}});
    res.status(201).send({updating : "status to false"});
});
module.exports = router;