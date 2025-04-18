import withDatabase from "../../lib/withDatabase";

async function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

export default withDatabase(handler);
