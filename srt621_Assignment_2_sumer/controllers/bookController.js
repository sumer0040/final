const Books = require('../models/books');
module.exports = {  
/*getting all books for home page */
  getAllBooks: (req, res) => {
  Books.find().lean().then((books) => {
  res.render( 'home', {books} ); })
  },
/*getting detail of one single book */
  getAllBookdetail: (req, res) =>{
  Books.findOne({ bookNumber: req.params.bookNumber }).lean().then((book) => {
  res.render( 'books', { book: book } ); })
  },
/*adding new book to database */
  addBookPage: (req, res) => {res.render("adding");},
  addingBook: (req, res) => {Books.find({}).lean().then((totalBooks) => {
      const bookNumber = totalBooks.length + 1;
      Books.create({bookNumber,bookName:req.body.bookName,author:req.body.authorName,link:req.body.amazonLink});
      if(Books){
        res.redirect('/home')
      }});
   },
/*deleting a book from database from its bookNumber*/
  deleteBookPage: (req, res) => {Books.find().lean().then((books) => {res.render('deleting', { books });})},
  deletingBook: (req, res) => {Books.deleteOne({ bookNumber: req.params.bookNumber }).then(() => {res.redirect('/Delete');})},
};
 