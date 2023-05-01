//const books = [
// { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
// isAvailable: true },
// { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
// isAvailable: false },
// { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
// 1866, isAvailable: true },
// { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
// isAvailable: false },
// { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
// ];

// Write a JavaScript program that performs the following tasks:
// 1. Create a function called getAvailableBooks that returns an array of all available
// books.

function getAvailableBooks(){
    const allBooks = [];
    for(let i = 0; i < books.length; i++){
        return  allBooks.push(books.title[i]);
    }
    return allBooks.length
}
console.log(getAvailableBooks());







const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
]
console.log(getAvailableBooks.books)





// // 2. Create a function getBooksByAuthor that takes an author's name as an argument and
function getBooksByAuthor(author){
    authorList = {};
    const filterAuthor = books.forEach(book => {
        return authorList.push[books.author] = [books.title]
    });
}
console.log(getBooksByAuthor());
  
    
//     }
//     // const books = [
//     // { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
//     // isAvailable: true },
//     // { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
//     // isAvailable: false },
//     // { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
//     // 1866, isAvailable: true },
//     // { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
//     // isAvailable: false },
//     // { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
//     // ]
//     console.log(getAvailableBooks.books)
    



// // 3. Create a function addNewBook that takes a book object as an argument and adds it
// // to the library, ensuring that the new book has all required properties (title, author,
// // publicationYear, and isAvailable).

function addNewBook(books){
    let r=[]
 for (let i=0; i.books<length;i++ ){
 r.push(books[i].books)

console.log(r)

 }




}



// // 4. Create a function checkoutBook that takes a book title as an argument and changes
// // the book's isAvailable property to false. If the book is not found in the library, the
// // function should return a message indicating that the book is not available.
function checkoutBook(title){
for (let i=0; i.title<length; i++){

if( i in books){
    return false
}

else{

    return (`the {book} is available`)
}
}
 



}

console.log(checkoutBook(title))


// // 5. Create a function returnBook that takes a book title as an argument and changes the
// // book's isAvailable property to true. If the book is not found in the library, the function
// // should return a message indicating that the book does not belong to the library.
function returnBook(title){
for (let i=0; i.title<length; i++){

    if( i in books){
        return true
    }
    
    else{
    
        return (`the {book} is not available`)
    }
    }
     
    
    
    
    }
    
    console.log(checkoutBook(title))
    
    
    