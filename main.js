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
