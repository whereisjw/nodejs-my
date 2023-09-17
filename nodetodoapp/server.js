const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080, function () {
  console.log("listening on 8080");
});
//첫번째 파라미터는 포트번호, 두번째 파라미터는 띄운후실행할코드

/* 
누군가가 /pet으로 방문을 하면 .. 
pet관련된 안내문을 띄워주자 */

app.get("/pet", function (요청, 응답) {
  응답.send("펫용품 쇼핑할 수 있는 페이지입니다.");
});

app.get("/beauty", function (req, res) {
  res.send("뷰티용품을 쇼핑할 수 있는 페이지입니다");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/write", function (req, res) {
  res.sendFile(__dirname + "/write.html");
});

/* 어떤 사람이 /add로 post요청을하면 .. ??를해주세요 */

app.post("/add", (req, res) => {
  res.send("전송완료");
  console.log(req.body.title);
  console.log(req.body.date);
});
