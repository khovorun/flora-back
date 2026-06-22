import { DataTypes } from 'sequelize';
import db from '../db/connection.js';

const Feedback = db.define(
  'review',
  {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'reviews',
    timestamps: true,
  }
);

export default Feedback;
