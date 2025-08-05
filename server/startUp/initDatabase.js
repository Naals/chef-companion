import dishMock from '../mock/dishes.json' with { type: 'json' };
import Dish from '../models/Dish.js';


const initDatabase = async () => {
    const dishes = await Dish.find();
    if(dishes.length !== dishMock.length) {
        await createInitialEntity(Dish, dishMock);
    }
}

async function createInitialEntity(Model, data) {
    await Model.collection.drop();
    return Promise.all(
        data.map(async (item) => {
            try{
                delete item._id;
                const newItem = new Model(item);
                await newItem.save();
            } catch (e) {
                console.error(e);
                return e;
            }
        })
    )
}

export default initDatabase;