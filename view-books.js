const books = [
    { title: "Physics Master Resource Book", author: "John Doe", description: "A comprehensive guide for JEE preparation." },
    { title: "Mathematics for Engineers", author: "Jane Doe", description: "An essential textbook for engineering students." },
    
];

const bookListDiv = document.getElementById('book-list');

books.forEach(book => {
    const bookItem = document.createElement('div');
    bookItem.classList.add('book-item');
    
    bookItem.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Description:</strong> ${book.description}</p>
    `;
    
    bookListDiv.appendChild(bookItem);
});
