"use server";
import mongoose from "mongoose";

const MONGODB_secret = process.env.MONGO_DB_SECRET;
const MONGODB_URI = `mongodb+srv://cligeroficial:${MONGODB_secret}@cluster0.qrgc8uv.mongodb.net/`;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGO_DB_SECRET environment variable in .env.local",
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
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "PKMN",
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
("");
