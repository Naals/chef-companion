import express from 'express';
import mongoose from 'mongoose';
import config from 'config';
import chalk from 'chalk';
import routes from './routes/index.js';
import cors from 'cors'; // ✅ Add this

const app = express();
const port = config.get('port') || 3001;

//user -> chef-companion
//password -> 3ofqo4xitDbeKnQE

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

        await mongoose.connect(config.get("MONGODB_URI"))
            .then(() => {
                console.log(chalk.green.bold('Connected to MongoDB successfully'));
            })
            .catch((err) => {
                console.error('MongoDB connection error:', err);
            });

        app.listen(port, () => {
            console.log(chalk.green(`Server started on port ${port}`));
        });
    } catch (error) {
        console.log(chalk.red.bold('Error: ' + error.message));
    }
}

start();
