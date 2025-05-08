import mongoose from "mongoose";
const { Schema } = mongoose;

const TrainerSchema = new Schema({
  nickname: String,
  password: String,
  name: String,
  pokemons_own: [Number],
  pokemons_own_total: [Number],
  pokemons_seen_total: [Number],
  base_stats: [{
    name:String,
    value:Number,
    potential:Number,
    color:String,
  }],
  obs: String,
});

// Check if the model already exists before defining it
const Trainer = mongoose.models.Trainer || mongoose.model("Trainer", TrainerSchema);

export default Trainer;