const express = require('express')
const Publisher = require('../models/publisher')
const { generateApiKey } = require('../utils/unique-ids')
const authPublisher = require("../middleware/auth")
const Asset = require('../models/asset')

const router = new express.Router()

// generate api-key; this would be triggered by the publisher himself/herself
router.patch("/publishers/api-key", authPublisher, async (req,res) => {
    try{
        req.publisher.apiKey = generateApiKey()
        const updatedPublisher = await req.publisher.save()
        res.status(201).send(updatedPublisher)
    }catch(e){
        res.status(400).send(e)
    }
})

// these apis would be triggered from within the app

router.post("/publishers/login", async (req,res) => {
    try{
        const publisher = await Publisher.findOne({apiKey: req.body.apiKey})
        await publisher.populate('assets')

        const asset = publisher.assets.find((asset)=> {
            return (asset._id.equals(req.body.appId))
        })

        res.status(201).send(asset)
    }catch(e){
        res.status(401).send(e)
    }
})

module.exports = router