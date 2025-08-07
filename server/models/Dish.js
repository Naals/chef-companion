import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

const Dish = sequelize.define('Dish', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: true,
});

export default Dish;
