const TopicModel = require('../models/Topic')

module.exports = async (id) => {
    const obj = await TopicModel.findById(id)
    return obj
}