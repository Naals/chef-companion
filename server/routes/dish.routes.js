// dish.routes.js
import express from 'express';
import Dish from "../models/Dish.js";
import Ingredient from "../models/Ingredient.js";

const router = express.Router();

// GET all dishes
router.get('/', async (req, res) => {
    console.log(req.query);
    try {
        const dishes = await Dish.findAll({ include: ['ingredients'] });
        res.status(200).json(dishes);

    } catch (e) {
        console.error(e);
        res.status(500).send('Server error');
    }
});

// GET dish by ID
router.get('/:id', async (req, res) => {
    try {
        const dish = await Dish.findByPk(req.params.id, { include: ['ingredients'] });
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
        const newDish = await Dish.create({ name, category });
        for (const ing of ingredients) {
            await Ingredient.create({ ...ing, dishId: newDish.id });
        }
        const fullDish = await Dish.findByPk(newDish.id, { include: ['ingredients'] });
        res.status(201).json({ message: 'Dish created', dish: fullDish });

    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Failed to create dish' });
    }
});


// PUT update dish
router.put('/:id', async (req, res) => {
    try {
        const dish = await Dish.findByPk(req.params.id);
        if (!dish) return res.status(404).json({ message: 'Not found' });

        await dish.update(req.body);

// Optional: delete old ingredients and re-add
        await Ingredient.destroy({ where: { dishId: dish.id } });
        for (const ing of req.body.ingredients) {
            await Ingredient.create({ ...ing, dishId: dish.id });
        }

        const updated = await Dish.findByPk(dish.id, { include: ['ingredients'] });
        res.json(updated);

    } catch (e) {
        console.error(e);
        res.status(500).send('Failed to update dish');
    }
});

// DELETE dish
router.delete('/:id', async (req, res) => {
    try {
        const dish = await Dish.findByPk(req.params.id);
        if (!dish) return res.status(404).json({ message: 'Not found' });
        await dish.destroy();
        res.json({ message: 'Deleted' });

    } catch (e) {
        console.error(e);
        res.status(500).send('Failed to delete dish');
    }
});

export default router;
