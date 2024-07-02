function Books(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = () => {
        return `${this.title} by ${this.author} ${this.pages} pages ${this.isRead ? "read" : "Not read"}`;
    }
}

let addBook = document.querySelector(".addBook");
let refresh = document.querySelector(".refreshTable");
let table = document.querySelector("#bookTable");

let Hobbit = new Books("Hobbit", "Hobbiter", 920, true);
let ReviveYourHeart = new Books("Revive Your Heart", "NAK", 600, false);
let index;
bookArr = [Hobbit,ReviveYourHeart];

function fillTable() {
    header();
    bookArr.forEach((book, i) => {
        let row = table.insertRow();
        row.id = i;
        let cell1 = row.insertCell(0);
        cell1.innerHTML = book.title;
        let cell2 = row.insertCell(1);
        cell2.innerHTML = book.author;
        let cell3 = row.insertCell(2);
        cell3.innerHTML = book.pages;
        let cell4 = row.insertCell(3);
        cell4.innerHTML = book.isRead ? "Read" : "Not Read";
        let cell5 = row.insertCell(4);
        cell5.innerHTML = `<td><button class='removeButton' id=${i}>Remove</button></td>`;
    });
}

function addToTable() {
    let newTitle = document.querySelector("#newBookTitle");
    let newAuthor = document.querySelector("#newBookAuthor");
    let newPages = document.querySelector("#newBookPages");
    let newStatus = document.getElementsByName("status");

    if (newTitle.value == ""){
        return alert("Enter Book Name");
    }
    else if (! newStatus[0].checked && ! newStatus[1].checked) {
        return;
    }
    
    let readStatus;
        
    if (newStatus[0].checked) {
        readStatus = true;
    }
    if(newStatus[1].checked){
        readStatus = false;
    }
    let newBook = newTitle.value;
    
    newBook = new Books(newTitle.value, newAuthor.value, newPages.value, readStatus);
    bookArr.push(newBook);
    console.log(bookArr);
}

//adding records and repopulating entire table
addBook.addEventListener("click", (e) => {
    e.preventDefault()
    addToTable();
    fillTable();
})

//Filling the entire table
refresh.addEventListener("click", (e) => {
    e.preventDefault()
    fillTable();
})

//Code to create a Header every time a table is filled
function header() {
    table.innerHTML = "<tr><th>Title</th><th>Author</th><th>No. of Pages</th><th>Read Status</th><th>Remove</th></tr>";
}

//Remove button Code
$(document).ready(function(){
    $('body').on('click', '.removeButton', function(){
        if($('.removeButton').length >= 0){
            $(this).parents('tr').remove();
            bookArr.splice(this.id, 1);
            fillTable();
            console.log(bookArr);
        }
    });
});

fillTable();


let addButton = document.querySelector("#addButton");

addButton.addEventListener("click", () => {
    console.log(addButton.className);
    if (addButton.className === "inactive") {
        addButton.className = "active";
        $(".sidebar").css({
            "display": "block",
        });
    }
    else {
        addButton.className = "inactive";
        $(".sidebar").css({
            "display": "none",
        });
    }
})
