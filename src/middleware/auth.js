

const jwt = require('jsonwebtoken');
const Publisher = require('../models/publisher');
// const { roles } = require('../utils/roles')

const authPublisher = async (req, res, next) => {
    try {
        // const token = req.cookies['auth_token']
        // const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        // const user = await User.findOne({ _id: decoded._id, 'tokens.token': token, isDeleted: false })

        // if (!user) {
        //     throw new Error()
        // }

        // if (user.blocked) {
        //     throw new Error()
        // }

        // req.token = token;
        // req.user = user;
        const publisher = await Publisher.findOne({email: req.body.email})
        req.publisher = publisher
        next();
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate!' });
    }
}

// const authAsset = async (req, res, next) => {
//     try {
//         const token = req.cookies['auth_asset_token'] || "DummyToken"
//         const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
//         await req.publisher.populate(assets)
//         req.publisher.assets.find((asset)=> {
//             return asset._id.equals(decoded)
//         })
//         req.publisher = publisher
//         next();
//     } catch (e) {
//         res.status(401).send({ error: 'Please authenticate!' });
//     }
// }


module.exports = authPublisher