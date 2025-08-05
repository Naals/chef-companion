import {Schema, model} from "mongoose";

const userSchema = new Schema({
    id: { type: String },
    name: { type: String },
    category: { type: String, required: true },
    ingredients: { type: Schema.Types.Array, ref: "Ingredient" },
}, {
    timestamps: true,
});

const Dish = model("Dish", userSchema);
export default Dish;