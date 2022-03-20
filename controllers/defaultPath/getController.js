const getServices = require('../../services/getServices')

module.exports = async (req, res) => {
    console.log(req.params)
    const responeGet = await getServices(req.params.id)

    return res.status(200).json(responeGet)
}