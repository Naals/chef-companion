import {Schema, model} from "mongoose";

const tokenSchema = new Schema({
    name: { type: String, required: true },
    amount: { type: Number },
    unit: { type: String },
}, {
    timestamps: true,
});

const Ingredient = model("Ingredient", tokenSchema);
export default Ingredient ;