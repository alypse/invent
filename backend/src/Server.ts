import express, {Request, Response} from "express";
import * as process from "process";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import { Item } from "./models/items.model";


dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());


// Get all items
app.get('/api/items', async (req: Request, res: Response) => {
    try {
        const items = await Item.find({});
        res.json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error});
    }
});

// Get a single item
app.get('/api/items/:id', async (req: Request, res: Response) => {
    try {
        const item = await Item.findById(req.params.id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({error: 'Item not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error});
    }
});

// Create a new item
app.post('/api/items', async (req: Request, res: Response) => {
    try {
        const item = await Item.create(req.body);
        res.status(201).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error});
    }
});

// Update an item
app.put('/api/items/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const item = await Item.findByIdAndUpdate(id, req.body);

        if (!item) {
            res.status(404).json({error: 'Item not found'});
        }
        const updatedItem = await Item.findById(id);
        res.status(200).json(updatedItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error});
    }
});



mongoose.connect(<string> process.env.URI)
    .then(() => { console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server listening on port: ${port}`);
        });
    })
    .catch((err) => {
        console.error(err, "error!")
    });


