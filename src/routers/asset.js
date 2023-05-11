const express = require('express')
const Publisher = require('../models/publisher')
const { generateApiKey } = require('../utils/unique-ids')
const auth = require("../middleware/auth")
const Asset = require('../models/asset')

const router = new express.Router()

// these apis would be triggered from within the app

router.post("/assets", auth, async (req,res) => {
    try{
        const asset = new Asset({
            name: req.body.name,
            url: req.body.url,
            publisher: req.publisher
        })
        const createdAsset = await asset.save()

        res.status(201).send(createdAsset)
    }catch(e){
        res.status(401).send(e)
    }
})

module.exports = router