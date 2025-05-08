import mongoose from "mongoose";
const { Schema } = mongoose;

const PkmnSchema = new Schema({
  id_dex: Number,
  ranking: Number,
  attacks: [Number],
  ability: String,
  trainer_id: Number,
  base_stats: [{
    name:String,
    value:Number,
    potential:Number,
    color:String,
  }],
  nickname: String,
  battles_won: Number,
  obs: String,
  total_hp: Number,
  ranges: [{
    name:String,
    value:Number,
    color:String,
  }]
});

// Check if the model already exists before defining it
const Pkmn = mongoose.models.Pkmns || mongoose.model("Pkmns", PkmnSchema);

export default Pkmn;