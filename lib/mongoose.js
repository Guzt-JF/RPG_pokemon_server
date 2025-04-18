"use server";
import mongoose from "mongoose";

const MONGODB_url = process.env.MONGO_DB_URL;
const MONGODB_URI = `${MONGODB_url}`;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_url environment variable in .env.local",
  );
}

// Global cache to prevent multiple connections
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    console.log("Connecting to database...");
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "PKMN",
    }).catch((err) => {
      console.error("Database connection failed:", err);
      throw err;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
("");
