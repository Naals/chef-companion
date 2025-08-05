// dish.routes.js
import express from 'express';
import Dish from "../models/Dish.js";

const router = express.Router();

// GET all dishes
router.get('/', async (req, res) => {
    console.log(req.query);
    try {
        const list = await Dish.find();
        res.status(200).json(list);
    } catch (e) {
        console.error(e);
        res.status(500).send('Server error');
    }
});

// GET dish by ID
router.get('/:id', async (req, res) => {
    try {
        const dish = await Dish.findById(req.params.id);
        if (!dish) return res.status(404).json({ message: 'Dish not found' });
        res.status(200).json(dish);
    } catch (e) {
        console.error(e);
        res.status(500).send('Server error');
    }
});

// POST create new dish
router.post('/', async (req, res) => {
    try {
        const { name, category, ingredients } = req.body;

        // Basic validation
        if (!name || !Array.isArray(ingredients) || ingredients.length === 0) {
            return res.status(400).json({ message: 'Name and at least one ingredient are required.' });
        }

        // Validate each ingredient
        for (const ing of ingredients) {
            if (!ing.name || typeof ing.amount !== 'number' || !ing.unit) {
                return res.status(400).json({
                    message: 'Each ingredient must have name, amount (number), and unit.'
                });
            }
        }

        const newDish = new Dish({ name, category, ingredients });
        await newDish.save();

        res.status(201).json({
            message: 'Dish created successfully',
            dish: newDish
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Failed to create dish' });
    }
});


// PUT update dish
router.put('/:id', async (req, res) => {
    try {
        const updatedDish = await Dish.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedDish) return res.status(404).json({ message: 'Dish not found' });
        res.status(200).json(updatedDish);
    } catch (e) {
        console.error(e);
        res.status(500).send('Failed to update dish');
    }
});

// DELETE dish
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Dish.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Dish not found' });
        res.status(200).json({ message: 'Dish deleted successfully' });
    } catch (e) {
        console.error(e);
        res.status(500).send('Failed to delete dish');
    }
});

export default router;
