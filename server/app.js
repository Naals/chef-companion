import express from 'express';
import config from 'config';
import chalk from 'chalk';
import routes from './routes/index.js';
import sequelize from './database/db.js';
import './models/Dish.js';
import './models/Ingredient.js';
// import initDatabase from "./startUp/initDatabase.js";
import cors from 'cors'; // ✅ Add this

const app = express();
const port = config.get('port') || 3001;



// ✅ Add this before routes
app.use(cors({
    origin: 'http://localhost:8008'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
    console.log(chalk.red.bold('production'));
} else {
    console.log(chalk.cyan.bold('development'));
}

async function start() {
    try {

        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        console.log('✅ DB synced');

        // await initDatabase(); // <- seeding mock data here

        app.listen(port, () => {
            console.log(`🚀 Server running on port ${port}`);
        });

    } catch (error) {
        console.log(chalk.red.bold('Error: ' + error.message));
    }
}

start();
