const TopicModel = require('../models/Topic')

module.exports = async (user, topic) => {
    const obj = {
        user, 
        topic
    }
    const addTopic = new TopicModel(obj)
    return addTopic.save()
}