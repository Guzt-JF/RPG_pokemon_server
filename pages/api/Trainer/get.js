import withDatabase from "../../../lib/withDatabase";
import Trainer from "../../../schemas/Trainer.js";

// Function to get a Trainer from the database
async function getTrainer(query) {
  try {
    // Find the Trainer based on the query
    return await Trainer.find(query);
  } catch (error) {
    console.error("Error retrieving Trainer:", error);
    throw error;
  }
}

async function handler(req, res) {
  try {
    let data = await getTrainer(req.body);
    console.log(data);

    if (!data) {
      res.status(404).json({ error: "Trainer not found" });
      return;
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve Trainer" });
  }
}

export default withDatabase(handler);
