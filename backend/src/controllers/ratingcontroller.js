const {getrating} = require('../DB/ratingdb')
module.exports ={
    rate:async()=>{
        z = await getrating();
        return z
    }
}