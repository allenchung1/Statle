import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import routes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 8080;

dotenv.config();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("Server is running...");
});

app.listen(PORT, () => {
     console.log(`Server running on https://statle.onrender.com`);
});