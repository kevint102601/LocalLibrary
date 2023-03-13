function getTotalBooksCount(books=[]) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let count=0;
  books.forEach((book)=>{
    book.borrows.forEach((item)=>{
      if(item.returned===false){
        count++;
      }
    })
  })
  return count;
}

function getMostCommonGenres(books) {
  const trackObj = {}
  books.forEach((bookObj)=>{
    if(trackObj[bookObj.genre] === undefined) {
      trackObj[bookObj.genre] = 1
    } else {
      trackObj[bookObj.genre] +=1
    }
  })
  const result = []
  for(let key in trackObj) {
    let info = {name: key, count: trackObj[key]}
    result.push(info)
  }
  result.sort((elementA, elementB)=>{
    return elementB.count - elementA.count
  })
  return result.slice(0,5)
}

function getMostPopularBooks(books) {
  let result = []
  books.forEach((bookObj)=>(
    result.push({name: bookObj.title,
                count: bookObj.borrows.length
  })))
  return result.sort((resultA, resultB)=> (resultA.count < resultB.count ? 1:-1)).slice(0, 5)
}




function getMostPopularAuthors(books, authors) {
  const result = []
  authors.forEach((authorObj)=>{
    let counter = 0
    books.forEach((bookObj)=>{
      if (bookObj.authorId === authorObj.id) {
        counter += bookObj.borrows.length
      }
    })
    result.push({name: authorObj.name.first + " " + authorObj.name.last, count: counter
                })
  })
  return result.sort((resultA, resultB)=> (resultA.count < resultB.count ? 1:-1)).slice(0, 5)
  
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
