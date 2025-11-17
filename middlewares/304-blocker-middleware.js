
module.exports = async (req, res, next) => {
    res.set('Cache-Control', 'no-store');
    res.set('ETag', false)

    next()
}