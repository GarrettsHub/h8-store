const daoCommon = require('./common/daoCommon')

const userDao = {...daoCommon, ...require('./api/userDao')}



module.exports = {
    userDao
}