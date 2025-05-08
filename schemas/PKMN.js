import mongoose from "mongoose";
const { Schema } = mongoose;

const PkmnSchema = new Schema({
  id_dex: Number,
  ranking: Number,
  attacks: [Number],
  trainer_id: Number,
  base_stats: [{
    name:String,
    value:Number,
    potential:Number,
    color:String,
  }],
  nickname: String,
  battles_won: String,
  obs: String,
  ranges: [{
    name:String,
    value:Number,
    color:String,
  }]
});

// Check if the model already exists before defining it
const Pkmn = mongoose.models.Pkmn || mongoose.model("Pkmn", PkmnSchema);

export default Pkmn;