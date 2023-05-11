

const jwt = require('jsonwebtoken');
const Publisher = require('../models/publisher');
// const { roles } = require('../utils/roles')

const auth = async (req, res, next) => {
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

module.exports = auth