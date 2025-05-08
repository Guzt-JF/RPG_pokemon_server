import withDatabase from "../../../lib/withDatabase";
import Trainer from "../../../schemas/Trainer.js";

// Function to udpate a Trainer into the database
async function updateTrainer(data) {
  try {
    // Find the Trainer by ID and update its data
    const result = await Trainer.findByIdAndUpdate(data.id, data, { new: true });

    return result;
  } catch (error) {
    console.error("Error udpating Trainer:", error);
    throw error;
  }
}

async function handler(req, res) {
  try {
    console.log(req.body);
    let data = await updateTrainer(req.body);

    console.log(data);
    if (data.error) {
      res.status(400).json({ error: data.error });
      return;
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to update Trainer" });
  }
}

export default withDatabase(handler);
