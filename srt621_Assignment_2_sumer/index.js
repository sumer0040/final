const express = require("express");
const expresshandler = require("express-handlebars");
const mongoose = require('mongoose');
const Controller = require('./controllers/bookController');
const app = express();
app.set("port", process.env.PORT || 3000);
/** connecting to database */
mongoose.connect("mongodb+srv://sumer:1234@srt-621.ok4zv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{ useUnifiedTopology: true });
db = mongoose.connection;
db.once("open", () => {console.log("Connected to Database");});
app.engine('.ejs', expresshandler.engine({defaultLayout:'homepage',extname:'.ejs',})).set('view engine','.ejs');
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => { res.redirect("/home");});
app.get("/home", Controller.getAllBooks);
app.get("/books/:bookNumber", Controller.getAllBookdetail);
/*for adding and deleting the books in the database calling controller*/
app.get("/Add",Controller.addBookPage);
app.post("/Add",Controller.addingBook);
app.get("/Delete",Controller.deleteBookPage);
app.get("/Delete/:bookNumber",Controller.deletingBook);
/*listen on local port 3000 */
app.listen(app.get("port"),() =>{console.log("Server Running on Local Port 3000");});