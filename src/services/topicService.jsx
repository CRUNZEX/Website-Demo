import axios from 'axios'

const topicService = async (id) => {
    const responeGet = await axios.get(`http://localhost:5000/api/${id}`)
        .catch(console.error)
    return responeGet
}

export default topicService