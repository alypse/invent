import express from "express";
import * as process from "process";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import { router } from "./routes/items.route";
const app = express();

// Middleware
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const port = process.env.PORT || 8080;

// Routes
app.use('/api/items', router);

// Connect to MongoDB
mongoose.connect(<string> process.env.URI)
    .then(() => { console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server listening on port: ${port}`);
        });
    })
    .catch((err) => {
        console.error(err, "error!")
    });


