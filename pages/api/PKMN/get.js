import withDatabase from '../../../lib/withDatabase';
import Pkmn from '../../../schemas/PKMN.js';

// Function to get a Pokémon from the database
async function getPkmn(query) {
  try {
    // Find the Pokémon based on the query
    const result = await Pkmn.findOne(query);

    return result;
  } catch (error) {
    console.error('Error retrieving Pokémon:', error);
    throw error;
  }
}

// Function to insert a Pokémon into the database
async function insertPkmn(data) {
  try {
    // Create a new Pokémon document
    const newPkmn = new Pkmn(data);

    // Save the document to the database
    const result = await newPkmn.save();

    return result;
  } catch (error) {
    console.error('Error inserting Pokémon:', error);
    throw error;
  }
}

async function handler(req, res) {
  try {
    console.log('Request method:', );
    let data = await getPkmn(req.body);
    
    if (!data) {
      res.status(404).json({ error: 'Pokémon not found' });  
      return;
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve Pokémon' });
  }
}

export default withDatabase(handler);