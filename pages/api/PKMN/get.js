import withDatabase from "../../../lib/withDatabase";
import Pkmn from "../../../schemas/PKMN.js";

// Function to get a Pokémon from the database
async function getPkmn(query) {
  try {
    // Find the Pokémon based on the query
    return await Pkmn.find(query);
  } catch (error) {
    console.error("Error retrieving Pokémon:", error);
    throw error;
  }
}

async function handler(req, res) {
  try {
    let data = await getPkmn(req.body);
    console.log(data);

    if (!data) {
      res.status(404).json({ error: "Pokémon not found" });
      return;
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve Pokémon" });
  }
}

export default withDatabase(handler);
