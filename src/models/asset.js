const mongoose = require('mongoose')
const validator = require('validator')

const assetSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        trim: true
    },
    apiKey: {
        type: String,
        trim: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    deletedAt: {
        type: Date,
        default: null
    },
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Publisher',
        required: true
    },
}, {
    timestamps: true
},{ toJSON: { virtuals: true } })

assetSchema.virtual('placements', {
    ref: 'Placement',
    localField: '_id',
    foreignField: 'asset'
})



const Asset = mongoose.model('Asset', assetSchema)

module.exports = Asset