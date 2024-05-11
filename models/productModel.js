const products = require('../data/products.json')

function findAll(){
    return new Promise((resolve,reject) => {
        resolve(products)
    })
}

function findById(id){
    return new Promise((resolve,reject) => {
        resolve(products.find((product) => product.id === id))
    })
}

module.exports = {
    findAll,
    findById
}