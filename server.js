import app from "./app.js";
// for using environment variable
import { config } from "dotenv";
// connection with DB done by this
import connectionToDB from "./config/dbConnection.js";

config();

const PORT = process.env.PORT || 5002;

app.listen(PORT, async () => {
  // first checking DB connection
  await connectionToDB();
  console.log(`App is running at http://localhost:${PORT}`);
});
