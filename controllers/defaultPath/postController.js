const postService = require('../../services/postServices')

module.exports = async (req, res) => {
    
    const responeAdd = await postService(req.body.user, req.body.topic)
    console.log( responeAdd)
    return res.status(200).json(req.body)
}