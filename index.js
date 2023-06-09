const express = require("express");
const app = express();
const port = 3000;
const GenreRouter = require("./routes/genre");
const commentsRouter = require('./routes/comments');
const getBookByISBNRouter = require("./routes/bookIBSN");
const getBooksByAuthorRouter = require("./routes/bookAuthor");
const postNewBookRouter = require("./routes/newBook")
const postAddAuthorRouter = require("./routes/addAuthor");
const EXPRERouter = require("./routes/expre");
const TopSellerRouter = require("./routes/topsellers");
const newCommentRouter = require("./routes/newComment");
const cartRouter = require("./routes/cart");
const RatingRouter = require("./routes/rating");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/users", cartRouter);
app.use("/genre", GenreRouter);
app.use("/getBookByISBN", getBookByISBNRouter);
app.use("/getBooksByAuthor", getBooksByAuthorRouter);
app.use("/newBook", postNewBookRouter);
app.use("/addAuthor", postAddAuthorRouter)
app.use("/expre", EXPRERouter);
app.use("/topsellers", TopSellerRouter);
app.use('/comments', commentsRouter);
app.use('/newComment', newCommentRouter);
app.use('/rating', RatingRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
