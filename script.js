/*need function in script to take user's input and store new book ojects in aray*/
//need function to loop through array and display each book on a card. Add an example book to help start
//need a "new book" button to print up form to input details
/*details include Author, Title, Number of Pages, If it's been read, and maybe a text area for book comments */
// each card needs a button to change it's "read" status
// - this button should use Book function's protoype inheritence

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}





const modal = document.getElementById("formModal");
const formBtn = document.getElementById("formBtn");
const closeBtn = document.getElementsByClassName("close-modal")[0];

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