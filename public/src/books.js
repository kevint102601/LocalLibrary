function findAuthorById(authors, id) {
  let result = authors.find((author)=> author.id === id)
  return  result
}

function findBookById(books, id) {
  const result = books.find((bookObj)=> {
  return bookObj.id === id
  })
  return result
}

function partitionBooksByBorrowedStatus(books) {
  let booksReturned = [];
  let booksBorrowed = [];
  for(let i = 0; i < books.length; i++) {
    let book = books[i]
    let result = book.borrows.some((borrow)=>{
     return borrow.returned === false
    })
    if(result === false) {
      booksReturned.push(book)
    }else {
      booksBorrowed.push(book)
    }
    
  }
  
  return [booksBorrowed, booksReturned];
}
function getBorrowersForBook(book, accounts) {
  let allBorrowers = []
  for(let i = 0; i < book.borrows.length; i++) {
    let {id, returned} = book.borrows[i]
   let result = accounts.find((account)=>{
     return account.id ===  id
    })
   result.returned = returned
    
   allBorrowers.push(result)
  }
  return allBorrowers.slice(0, 10)
  
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
