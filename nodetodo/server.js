const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");

let db;
const url =
  "mongodb+srv://admin:qwer1234@cluster0.phycxv2.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";
new MongoClient(url)
  .connect()
  .then((client) => {
    console.log("DB연결성공");
    db = client.db("five");
    app.listen(1215, () => {
      console.log("http://localhost:1215 서버 확인용 콘솔");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("홈입니까");
});

app.get("/news", () => {
  db.collection("post").insertOne({ title: "어쩌구" });
});
app.get("/list", async (req, res) => {
  let result = await db.collection("database").find().toArray();
  res.send(result[0].title);
});
