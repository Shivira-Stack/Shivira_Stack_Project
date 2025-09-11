import express from "express";
import statusMonitor from "express-status-monitor";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import authRoutes from "./routes/auth/authRoutes.js";
import { sessionMiddleware } from "./utils/session.js";

dotenv.config();

const Host = process.env.HOST;
const Port = process.env.SERVER_PORT;
const pm2OutLog = "/root/.pm2/logs/shivira-server-out.log";
const pm2ErrLog = "/root/.pm2/logs/shivira-server-error.log";


const app = express();
app.use(statusMonitor());
app.use(express.json());
app.use(
  cors({
    origin: `http://${Host}`,
    credentials: true,
  })
);
app.use(sessionMiddleware);

// --- Logs Api: only latest nodemon session ---
app.get("/api/logs", (req, res) => {
  let combinedLogs = "";

  // Combine both out + error logs
  if (fs.existsSync(pm2OutLog)) combinedLogs += fs.readFileSync(pm2OutLog, "utf8") + "\n";
  if (fs.existsSync(pm2ErrLog)) combinedLogs += fs.readFileSync(pm2ErrLog, "utf8");

  const lines = combinedLogs.split("\n");

  // Find all nodemon start markers
  const startIndices = lines
    .map((line, idx) => line.includes("[nodemon] starting `node server.js`") ? idx : -1)
    .filter(idx => idx !== -1);

  // Take only the lines from the **last start marker**
  let latestSession = [];
  if (startIndices.length > 0) {
    const lastStartIndex = startIndices[startIndices.length - 1];
    latestSession = lines.slice(lastStartIndex);
  } else {
    // fallback: last 50 lines if no start marker found
    latestSession = lines.slice(-50);
  }

  res.send(`<pre>${latestSession.join("\n")}</pre>`);
});

// ✅ Serve files statically from uploads folder
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// --- API: List files/folders inside "uploads" ---
app.get("/api/files", (req, res) => {
  const uploadsPath = path.join(process.cwd(), "uploads");

  fs.readdir(uploadsPath, { withFileTypes: true }, (err, items) => {
    if (err) {
      return res.status(500).json({ error: "Unable to read uploads folder" });
    }

    const fileList = items.map((item) => ({
      name: item.name,
      type: item.isDirectory() ? "folder" : "file",
      url: item.isDirectory()
        ? null
        : `/uploads/${item.name}` // ✅ Return direct file URL
    }));

    res.json(fileList);
  });
});

app.use("/api/auth", authRoutes);

// --- Start Server ---
app.listen(Port, () => {
  console.log(`🚀 Server running on http://${Host}:${Port}`);
});
