// pages/api/test.js
import clientPromise from "@/lib/api/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("test"); // tên database, bạn có thể đổi

  const collection = db.collection("demo"); // tên collection

  const data = await collection.find({}).toArray();

  res.status(200).json(data);
}
