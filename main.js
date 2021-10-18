//   const Book = function (title, author) {
//     this.title = title;
//     this.author = author;
//   }

//   function displayBooks() {
//     const books = getBooks();
//     books.forEach((book) => addBookToList(book));
//   }

//   function addBookToList(book) {
//     const bookitem = document.createElement('div')
//     bookitem.innerHTML = `
//       <h2>${book.title}</h2>
//       <h2>${book.author}</h2>
//       <button class="remove-book" type="button">Remove</button>
//       <hr>
//     `;
//     document.querySelector('.books').appendChild(bookitem);
//   }

//   function removeBook(el) {
//     if(el.classList.contains('remove-book')) {
//       el.parentElement.parentElement.remove();
//     }
//   }

//   function clearFields() {
//     document.querySelector('#title').value = '';
//     document.querySelector('#author').value = '';
//   }

//   function getBooks() {
//     let books;
//     if(localStorage.getItem('books') === null) {
//       books = [];
//     } else {
//       books = JSON.parse(localStorage.getItem('books'));
//     }

//     return books;
//   }

//   function addBook(book) {
//     const books = getBooks();
//     books.push(book);
//     localStorage.setItem('books', JSON.stringify(books));
//   }

//   // function removeBook(isbn) {
//   //   const books = getBooks();

//   //   books.forEach((book, index) => {
//   //     if(book.isbn === isbn) {
//   //       books.splice(index, 1);
//   //     }
//   //   });

//   //   localStorage.setItem('books', JSON.stringify(books));
//   // }

// document.addEventListener('DOMContentLoaded', displayBooks);


// document.querySelector('.form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   clearFields();
// });

// document.querySelector('.books').addEventListener('click', (e) => {
//   removeBook(e.target);
//   removeBook(e.target.parentElement.previousElementSibling.textContent);
// });

const bookList = document.querySelector(".books")

const Book = function (title, author) {
  this.title = title;
  this.author = author;
}

let storedData = []

function addBookToList(newBook) {
  let bookTemp = `
    <div class="book">
      <h2>Title: ${newBook.title}</h2>
      <h2>Author: ${newBook.author}</h2>
      <button class="remove" type="button">Remove</button>
      <hr>
    </div>
  `;
  return document.querySelector('.books').innerHTML += bookTemp;
}

document.addEventListener('DOMContentLoaded', () => {
  if (bookList !== null) {
    storedData = [...JSON.parse(localStorage.getItem('localBookList'))];
    storedData.forEach((item) => {
      addBookToList(item)
    })
  }
})

const addBook= document.querySelector('#add-book');
addBook.addEventListener('click', (e) => {
  const newBook = new Book(title.value, author.value)
  e.preventDefault();
  addBookToList(newBook);
  storedData.push(newBook);
  title.value = "";
  author.value = "";
  localStorage.setItem('localBookList', JSON.stringify(storedData)); 

});

bookList.addEventListener('click', (el) =>{
  if(el.target.classList.contains('remove')) {
    document.querySelector('.books').removeChild(el.target.parentElement);
    const removeBook = storedData.find((item) => item.title === el.target.parentElement.firstChild.innerText);
    storedData.splice(storedData.indexOf(removeBook), 1);
    localStorage.setItem('localBookList', JSON.stringify(storedData))

  }
} )


const title = document.getElementById('title')
const author = document.getElementById('author')

title.required = true;



// function removeBook(el) {
//   if(el.target.classList.contains('remove')) {
//     document.querySelector('.books').removeChild(el.target.parentElement);
//   }
// }

// const remove = document.querySelector('.remove');
// remove.addEventListener('click', (e) => {
//   e.preventDefault();
//   removeBook();
// });