import express from "express";
import qr from "qr-image";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/api/qr", (req, res) => {
  const text = req.query.text;

  if (!text) {
    return res.status(400).send("Missing text query parameter");
  }

  try {
    const qr_png = qr.image(text, { type: "png" });
    res.type("png");
    qr_png.pipe(res);
  } catch (err) {
    res.status(500).send("Error generating QR code");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
