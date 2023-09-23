const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
let db;
const url =
  "mongodb+srv://admin:qwer1234@admin.eepuvsg.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";
new MongoClient(url)
  .connect()
  .then((client) => {
    console.log("DB연결성공");
    db = client.db("jdatabase");
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
  db.collection("jcollection").insertOne({ title: "어쩌구" });
});

app.get("/list", async (req, res) => {
  let result = await db.collection("jcollection").find().toArray();
  console.log(result[0]);

  res.render("list.ejs", { post: result });
});

app.get("/time", (req, res) => {
  res.render("time.ejs", { data: new Date() });
});
