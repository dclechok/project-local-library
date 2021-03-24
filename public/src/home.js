// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => {
    return acc + book.borrows.filter(notReturned => notReturned.returned === false).length;
  }, 0);
}

function getMostCommonGenres(books) {
  const genres = [];
  for(let book of books){
    let genreExists = genres.find(genre => genre.name === book.genre);
    if (!genreExists) {
      //genres.push({name: book.genre, count: 1});
      genres.push(buildCounterObject(book.genre, 1)); //helper function
    } else {
      genreExists.count++;
    }
  }
  return genres.sort((first, second) => second.count - first.count).slice(0, 5);
}

function getMostPopularBooks(books) {
  const bookArr = [];
  books.sort((first, second) => second.borrows.length - first.borrows.length);
  for(let book of books){
    bookArr.push({name: book.title, count: book.borrows.length});
  }
  return bookArr.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const authInfo = [];
  let mapAuthInfo = [];
  console.log(books);
  for(let book of books){
    const authObject = authInfo.find(auth => auth.name === book.authorId);
    if(!authObject){
      // authInfo.push({name: book.authorId, count: book.borrows.length});
      authInfo.push(buildCounterObject(book.authorId, book.borrows.length));
    }else{
      authObject.count++;
    }
  }
  mapAuthInfo = authInfo.sort((first, second) => second.count - first.count).slice(0, 5);
  return mapAuthInfo.map(eachObj => { //map each object, where name: id turns into name: name
    let authorName = authors.find(name => eachObj.name === name.id);
    //return {name: authorName.name.first + ' ' + authorName.name.last, count: eachObj.count};
    return buildCounterObject(authorName.name.first + ' ' + authorName.name.last, eachObj.count);
  });
}

function buildCounterObject(nameInfo, countInfo) //helper function
{  //constructs counter objects
  return {name: nameInfo, count: countInfo};
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
  buildCounterObject,
};
