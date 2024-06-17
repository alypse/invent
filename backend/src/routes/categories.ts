import { Router } from "express";

export const router = Router();

// Get all
router.get('/', (req, res) => {
    res.send('Hello World!');
});

// Get one
router.get('/:id', (req, res) => {
    res.send(req.params.id);
});

// Create one
router.post('/', (req, res) => {

});

// Update one
router.patch('/:id', (req, res) => {

});
// Delete one
router.post('/:id', (req, res) => {

});