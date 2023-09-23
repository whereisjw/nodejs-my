### 템플릿엔진 ejs 사용

pug ejs 등
npm install ejs

js 상단에 적기
app.set("view engine", "ejs");

views 폴더생성
폴더안에 ejs파일생성
페이지안에 렌더코드 작성
res.render("list.ejs");

app.get("/list", async (req, res) => {
let result = await db.collection("jcollection").find().toArray();
console.log(result[0]);

res.render("list.ejs",{post : result});
});

<%=post %>

로 출력하기
