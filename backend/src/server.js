import "dotenv/config";
import app from "./app.js";
import { connectDatabase } from "./config/database.js";

const port = Number(process.env.PORT) || 5000;

await connectDatabase();

app.listen(port, () => {
  console.log(`GramSeva backend running on port ${port}`);
});
