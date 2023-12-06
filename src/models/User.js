import { Sequelize,DataTypes } from "sequelize";
import sequelize from "../util/database";

const User = sequelize.define("users",{
     id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
        },
        author: {
          type: DataTypes.STRING,
        },
})
module.exports = User