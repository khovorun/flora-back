import { DataTypes } from 'sequelize';
import db from '../db/connection.js';

const Purchase = db.define(
  'order',
  {
    bouquetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bouquetTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bouquetPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    total: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerPhone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerComment: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: '',
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'pending',
    },
  },
  {
    tableName: 'orders',
    timestamps: true,
  }
);

export default Purchase;
