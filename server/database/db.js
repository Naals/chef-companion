// db.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('chef_companion_db', 'chef_user', 'chef_pass', {
    host: '127.0.0.1',
    dialect: 'mysql',
});

export default sequelize;
