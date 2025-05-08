import withDatabase from "../../../lib/withDatabase";
import Pkmn from "../../../schemas/PKMN.js";

// Function to udpate a Pokémon into the database
async function updatePkmn(data) {
  try {
    // Find the Pokémon by ID and update its data
    const result = await Pkmn.findByIdAndUpdate(data.id, data, { new: true });
    console.log("Updated Pokémon:", data);

    return result;
  } catch (error) {
    console.error("Error udpating Pokémon:", error);
    throw error;
  }
}

async function handler(req, res) {
  try {
    let data = await updatePkmn(req.body);

    if (data.error) {
      res.status(400).json({ error: data.error });
      return;
    }

    // console.log("Updated Pokémon:", data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to update Pokémon" });
  }
}

export default withDatabase(handler);
