import { Sequelize , DataType, DataTypes } from "sequelize";
import 'dotenv/config'

const sequelize = new Sequelize('test','root','',
     {
     host:'localhost',
     dialect:'mysql',
     operatorsAliases:false,
     pool:{
          max:5,
          min:0,
          acquire:30000,
          idle:10000
     }
}
)

sequelize.authenticate(()=>{
     console.log('connected Db')
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./product')(sequelize,DataTypes)

db.sequelize.sync({force:false})
.then(()=>{
     console.log('created')
})

module.exports = db




