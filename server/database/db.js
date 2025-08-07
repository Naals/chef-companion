// db.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('satuboos_ter_satufood_povar_almaty_zhzanat', 'satuboos_ter_satufood_povar_almaty_zhzanat', 'satuboos_ter_satufood_povar_almaty_zhzanat', {
    host: '127.0.0.1',
    dialect: 'mysql',
});

export default sequelize;
