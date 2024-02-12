const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Cartoon extends Model {}
Cartoon.init(
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
    title: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "cartoons",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Cartoon;
