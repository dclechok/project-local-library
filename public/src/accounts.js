// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => (accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase()) ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  //returns a _number_ that represents the number of times the account's ID appears in any book's `borrow` array.
  let numOfTimes = 0;
  for(let book in books){
    if(books[book].borrows.find(borrower => borrower.id === account.id)) numOfTimes++;
  }
  return numOfTimes;
}

function getBooksPossessedByAccount(account, books, authors) {

  const arrOfBooksByAcct = [];
  let bookObj, authorObj = {};
  for(let book in books){ //push all books that are currently rented by account into one list
    bookObj = books[book];
    if(bookObj.borrows.find(borrower => borrower.id === account.id && borrower.returned === false)){
      
      for(let author in authors){
        authorObj = authors[author];
        if(bookObj.authorId === authorObj.id){
          //push author information onto array by adding author in object shorthand/spread operator
          arrOfBooksByAcct.push({...bookObj, author: {...authorObj}});
          console.log(arrOfBooksByAcct);
        }
      }
    }
  }
  return arrOfBooksByAcct;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
