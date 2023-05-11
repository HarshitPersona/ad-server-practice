const mongoose = require('mongoose')

const placementSchema = new mongoose.Schema({
    name: {
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
    asset: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Asset',
        required: true
    },
}, {
    timestamps: true
})



const Placement = mongoose.model('Placement', placementSchema)

module.exports = Placement