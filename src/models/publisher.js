const mongoose = require('mongoose')
const validator = require('validator')

const publisherSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        validate(value) {
            if (value && !validator.isEmail(value)) {
                throw new Error("Invalid Email!")
            }
        }
    },
    mobile: {
        type: String,
        trim: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        },
    }],
    isDeleted: {
        type: Boolean,
        default: false
    },
    deletedAt: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
},{ toJSON: { virtuals: true } })


publisherSchema.virtual('assets', {
    ref: 'Asset',
    localField: '_id',
    foreignField: 'publisher'
})


const Publisher = mongoose.model('Publisher', publisherSchema)

module.exports = Publisher