import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize('test','root','',{
     dialect:"mysql",
     host:"localhost"
})

const testDb = async () => {
     sequelize.authenticate().then(()=>{
          console.log('Connected Db')
     })
     .catch(err=>{
          console.err(err)
     })
}
testDb();

const User = sequelize.define('users',{
     user_id : {
          type : DataTypes.UUID(),
          primaryKey:true,
          autoIncrement:false,
     },
     name : {
          type:DataTypes.STRING,
          allowNull:true
     },
     password : {
          type:DataTypes.STRING,
          allowNull:true
     },
     address : {
          type:DataTypes.STRING,
          allowNull:true,
          defaultValue:true
     },
     addresstwo : {
          type:DataTypes.STRING,
          allowNull:true,
          defaultValue:true
     }
})

User.sync({alter:true}).then(data=>{
     console.log('user table created')
     console.log(data)
})
.catch(err=>{
     console.log(err)
})

module.exports = sequelize