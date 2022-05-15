/*need function in script to take user's input and store new book ojects in aray*/
//need function to loop through array and display each book on a card. Add an example book to help start
//need a "new book" button to print up form to input details
/*details include Author, Title, Number of Pages, If it's been read, and maybe a text area for book comments */
// each card needs a button to change it's "read" status
// - this button should use Book function's protoype inheritence

const modal = document.getElementById("formModal");
const formBtn = document.getElementById("formBtn");
const closeBtn = document.getElementsByClassName("close-modal")[0];

let myLibrary = [];

class Book {
  constructor (
    title = 'The Crystal Shard',
    author = 'R.A.Salvatore',
    pages = '336',
    read = true
  ) {
    this.id = ++cardId
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

  }
}

function addBookToLibrary() {
  // do stuff here
  //boolean to see if book is in array, if not. add

  myLibrary.push(this)
}

function addBookCard() {
  //whole lotta appendChild
  const card = document.createElement("div");
  const cardTitle = document.createElement("p");
  const cardPages = document.createElement("p");
  const cardRead = document.createElement("p");
  const cardClose = document.createElement("span");
  cardClose.addEventListener("click", cardDelete)
  main.appendChild(card).className = 'card';
  card.setAttribute('id', [i + 1]);
  card.appendChild(cardTitle).className = 'card-title';
  card.appendChild(cardPages).className = 'card-pages';
  card.appendChild(cardRead).className = 'card-read';
  card.appendChild(cardClose).className = 'card-close';

  
}

function newBookInput() {
  const title = document.getElementbyId("bookTitle").value
  const author = document.getElementById("author").value
  const pages = document.getElementById("pages").value
  return new Book(title, author, pages)

}

function cardDelete() {
  // uses close span in card to delete card
}

function bookCheck() {
  // gives error saying book is in library 
}

formBtn.addEventListener("click", () => {
    modal.style.display = "block";
})

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}