const express = require("express");
const app = express();
const getBookByISBNRouter = require("./sprint 2/routes/bookIBSN");
const getBooksByAuthorRouter = require("./sprint 2/routes/bookAuthor");
const postNewBookRouter = require("./sprint 2/routes/newBook")
const postAddAuthorRouter = require("./sprint 2/routes/addAuthor")

app.use(express.json());
app.use(
    express.urlencoded({
     extended: true,
    })
);

app.use("/getBookByISBN", getBookByISBNRouter);
app.use("/getBooksByAuthor", getBooksByAuthorRouter);
app.use("/newBook", postNewBookRouter);
app.use("/addAuthor", postAddAuthorRouter)
app.get("/url", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});