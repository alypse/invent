import { Item } from "../models/items.model";

// Get all items
const getItems = async (req: any, res: any) => {
    try {
        const items = await Item.find({});
        res.status(200).json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error});
    }
}

// Get a single item
const getItem = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const item = await Item.findById(id);

        if (item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({error: 'Item not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error});
    }
}

// Create a new item
const createItem = async (req: any, res: any) => {
    try {
        const item = await Item.create(req.body);
        res.status(201).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error});
    }
}

// Update an item
const updateItem = async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const item = await Item.findByIdAndUpdate(id, req.body);

        if (!item) {
            res.status(404).json({error: 'Item not found'});
        }
        const updatedItem = await Item.findById(id);
        res.status(200).json({message: `Item ${id} updated`, item: updatedItem});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error});
    }
}

// Delete an item
const deleteItem = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const item = await Item.findByIdAndDelete(id);

        if (!item) {
            return res.status(404).json({error: `Item ${id} not found`});
        }
        res.status(200).json({message: `Item ${id} deleted`});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error});
    }
}

export { getItems, getItem, createItem, updateItem, deleteItem };