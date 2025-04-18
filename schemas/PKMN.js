import mongoose from "mongoose";
const { Schema } = mongoose;

const PkmnSchema = new Schema({
  id_dex: Number,
  attacks: [Number],
  trainer_id: Number,
  nickname: String,
});

// Check if the model already exists before defining it
const Pkmn = mongoose.models.Pkmn || mongoose.model("Pkmn", PkmnSchema);

export default Pkmn;