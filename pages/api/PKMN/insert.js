import withDatabase from "../../../lib/withDatabase";
import Pkmn from "../../../schemas/PKMN.js";

// Function to insert a Pokémon into the database
async function insertPkmn(data) {
  try {
    // Create a new Pokémon document
    const newPkmn = new Pkmn(data);

    // Save the document to the database
    const result = await newPkmn.save();

    return result;
  } catch (error) {
    console.error("Error inserting Pokémon:", error);
    throw error;
  }
}

async function handler(req, res) {
  try {
    console.log("Request method:");
    let data = await insertPkmn(req.body);

    console.log(data);
    if (data.error) {
      res.status(400).json({ error: data.error });
      return;
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve Pokémon" });
  }
}

export default withDatabase(handler);
