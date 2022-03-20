const mongoose = require('mongoose')

const TopicSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        default: 'eiei'
    },
    topic: {
        title: {
            type: String,
            required: true,
            default: 'eiei Topic'
        },
        content: {
            type: String,
            required: true,
            default: 'eiei Content'    
        }
    }
},
{
    timestamps: { currentTime: Date.now }
})

const TopicModel = mongoose.model('Topic', TopicSchema)
module.exports = TopicModel