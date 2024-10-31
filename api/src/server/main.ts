import express from "express";
import ViteExpress from "vite-express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());


app.post("/api/contact", (req, res) => {
  const message = `Thank you for your interest, ${req.body.name}!`;
  console.log(req.body);
  res.send(message);
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
