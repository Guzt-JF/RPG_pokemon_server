import mongoose from 'mongoose';
const { Schema } = mongoose;

const PkmnSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  picture: String,
  sprite: String,
  ability: String,
  nature: String,
  confidence: String,
  hp: Number,
  will: Number,
  rank: Number,
  type: String,
  num_battles: Number,
  num_wins: Number,
  pkmn_status_id: Number,
  owner_id: Number,
  attacks_id: [Number],
});

// Check if the model already exists before defining it
const Pkmn = mongoose.models.Pkmn || mongoose.model('Pkmn', PkmnSchema);

export default Pkmn;