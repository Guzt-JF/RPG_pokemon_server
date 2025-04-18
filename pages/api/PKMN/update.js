import withDatabase from "../../../lib/withDatabase";

async function handler(req, res) {
  try {
    res.status(200).json({'updated': 'nothing'});
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve Pokémon" });
  }
}

export default withDatabase(handler);
