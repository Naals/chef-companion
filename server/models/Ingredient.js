import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';
import Dish from './Dish.js';

const Ingredient = sequelize.define('Ingredient', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

Dish.hasMany(Ingredient, { as: 'ingredients', foreignKey: 'dishId', onDelete: 'CASCADE' });
Ingredient.belongsTo(Dish, { foreignKey: 'dishId' });

export default Ingredient;
