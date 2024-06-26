import { Router } from "express";
import { getItems, getItem, createItem, updateItem, deleteItem } from "../controllers/item.controller";

export const router = Router();

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

