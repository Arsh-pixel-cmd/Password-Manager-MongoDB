import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { MongoClient, ObjectId } from "mongodb";
import bodyParser from "body-parser";
import cors from "cors";


const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "PasswordManager";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


await client.connect();
const db = client.db(dbName);
const collection = db.collection("passwords");


app.get("/api/passwords", async (req, res) => {
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});


app.post("/api/passwords", async (req, res) => {
  const password = req.body;
  const result = await collection.insertOne(password);
  res.send({ success: true, result });
});


app.delete("/api/passwords/:id", async (req, res) => {
  const { id } = req.params;
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  res.send({ success: true, result });
});


app.put("/api/passwords/:id", async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  const db = client.db(dbName);
  const collection = db.collection("passwords");

  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedData }
  );

  res.send({ success: true, result });
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
