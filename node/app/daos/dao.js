const daoCommon = require('./common/daoCommon')

const userDao = {...daoCommon, ...require('./api/userDao')}

const productDao = {...daoCommon, ...require('./api/productDao')}

const categoryDao = {...daoCommon, ...require('./api/categoryDao')}

const cartDao = {...daoCommon, ...require('./api/cartDao')}

module.exports = {
    userDao,
    productDao,
    categoryDao,
    cartDao
}