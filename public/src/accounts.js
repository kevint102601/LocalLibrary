function findAccountById(accounts, id) {
  let result = accounts.find((accountObj)=> accountObj.id === id)
  return result
}

function sortAccountsByLastName(accounts) {
  accounts.sort((elementA, elementB)=>{
    return elementA.name.last < elementB.name.last ? -1: 1;
  })
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
  const {id} = account;
  let count = books.reduce((accumulator, booksObj)=>{
    const {borrows} = booksObj;
    const numberBorrowed = borrows.filter((borrowsObj)=>{
      return borrowsObj.id === id
    })
   return accumulator+=numberBorrowed.length
  },0)
  return count
}
function getBooksPossessedByAccount(account, books, authors) {
  let booksOut = books.filter((book) => book.borrows.some(borrow => !borrow.returned && borrow.id === account.id))

  booksOut.map(book => book['author'] = authors.find(person => person.id === book.authorId))
  return booksOut
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
