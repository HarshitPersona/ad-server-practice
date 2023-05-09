

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        next()
      } else {
        res.status(401).send('Unauthorized');
      }
}

module.exports = auth