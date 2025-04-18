import connectToDatabase from "./mongoose";

export default function withDatabase(handler) {
  return async (req, res) => {
    try {
      // Establish database connection
      await connectToDatabase();
      console.log("Database connected");

      // Proceed to the main handler
      return handler(req, res);
    } catch (error) {
      console.error("Database connection error:", error);
      res.status(500).json({ error: "Failed to connect to database" });
    }
  };
}
