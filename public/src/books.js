// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const loaned = [], returned = [];
  bookObj = {};
  for(let book in books){
    bookObj = books[book];
    if(bookObj.borrows.find(status => status.returned === false) ? loaned.push(bookObj) : returned.push(bookObj));
  }
  return [[...loaned], [...returned]];
}

function getBorrowersForBook(book, accounts) {
  const arrOfBooksInfo = [];
  for(let borrowInfo in book.borrows){
      if(arrOfBooksInfo.length === 10) break; //if array of books is full (10) break out of loop
      acctInfo = accounts.find(account => account.id === book.borrows[borrowInfo].id); //set account info the account found that matches the id
      if(acctInfo) arrOfBooksInfo.push({...book.borrows[borrowInfo],...acctInfo}); //if acctInfo is valid we push the borrows info, and account info into a new object onto the array
  }
  return arrOfBooksInfo;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
