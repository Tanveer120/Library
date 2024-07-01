function Books(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = () => {
        return `${this.title} by ${this.author} ${this.pages} pages ${this.isRead ? "read" : "Not read"}`;
    }
}

Books.prototype.myName = () => {
    return `Tanveer`;
}


let Hobbit = new Books("Hobbit", "Hobbiter", 920, true);
let ReviveYourHeart = new Books("Revive Your Heart", "NAK", 600, false);

bookArr = [Hobbit, ReviveYourHeart]

// let alert1 = document.querySelector(".alert1");
// alert1.addEventListener("click", () => {

// })

// for (let book of objarray) {
//     alert(book.info());
// }

let table = document.querySelector("#bookTable");
function fillTable() {
    for (let book of bookArr) {
        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        cell1.innerHTML = book.title;
        let cell2 = row.insertCell(1);
        cell2.innerHTML = book.author;
        let cell3 = row.insertCell(2);
        cell3.innerHTML = book.pages;
        let cell4 = row.insertCell(3);
        cell4.innerHTML = book.isRead?"Read":"Not Read";
    }
}


fillTable()

