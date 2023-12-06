import { Sequelize } from "sequelize";
const sequelize = new Sequelize('nodetest','root','',
          {
               host:'localhost',
               dialect : 'mysql',
               logging: false,
               operatorsAliases: false,
               define: {
                    freezeTableName: true
               }
          }
     )

module.exports = sequelize