const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Like extends Model {}
Like.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "posts",
        key: "id",
      },
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "likes",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Like;
