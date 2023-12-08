
module.exports = (sequelize,DataTypes) => {
     const Product = sequelize.define('products',{
          title : {
               type : DataTypes.STRING,
          },
          price : {
               type : DataTypes.STRING,
          },
          address : {
               type : DataTypes.STRING,
          }
     });
     return Product
}