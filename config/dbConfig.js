import { Sequelize , DataType } from "sequelize";
import 'dotenv/config'

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,
     {
     host:process.env.HOST,
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

