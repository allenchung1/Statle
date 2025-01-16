import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import routes from "./routes/index.js";
// import pg from "pg";

// const { Pool } = pg;

const app = express();
const PORT = process.env.PORT || 8080;

dotenv.config();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

// const db = new Pool({
//     //connectionString: "postgresql://root:wmXRAJB8ZH99obXIFjX0Msh6qGdHRuzG@dpg-ctqsim2j1k6c73aft4q0-a.oregon-postgres.render.com/champdb",
//     connectionString: process.env.DB_URL,
//     ssl: {
//         rejectUnauthorized: false, // Allows self-signed certificates (adjust as needed for production)
//     },
// });

// const connectDb = async () => {
//     try {
//         const client = await db.connect();
//         console.log("Connected to PostgreSQL");
//         client.release();  // Release the client back to the pool
//     } catch (err) {
//         console.error("Error connecting to PostgreSQL:", err.stack);
//     }
// };
// connectDb();

app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("Server is running...");
});

app.listen(PORT, () => {
     console.log(`Server running on http://localhost:${PORT}`);
});