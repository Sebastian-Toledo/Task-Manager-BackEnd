import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
  const DB_URI = <string>process.env.DB;
  await connect(DB_URI);
}
