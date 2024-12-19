function searchBooks() {
    let query = document.getElementById('search-bar').value.toLowerCase();
    let bookItems = document.querySelectorAll('.book-item');
    
    bookItems.forEach((book) => {
        let bookTitle = book.querySelector('img').alt.toLowerCase();  
        if (bookTitle.includes(query)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
}
 
document.addEventListener("DOMContentLoaded", function () {
    const completeButtons = document.querySelectorAll('.complete-btn');
    const clickButtons = document.querySelectorAll('.click-btn');
 
    completeButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('You completed this book!');
        });
    });

    clickButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Ride the book!');
        });
    });
});
function searchBooks() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const bookItems = document.querySelectorAll('.book-item');
    
    bookItems.forEach(item => {
        const title = item.querySelector('img').alt.toLowerCase();
        if (title.includes(searchTerm)) {
            item.style.display = 'block';   
        } else {
            item.style.display = 'none';   
        }
    });
}

// Genre-filtering
document.getElementById("genre-filter").addEventListener('change', function() {
    const selectedGenre = this.value.toLowerCase();
    const sections = document.querySelectorAll(".category-section");

    sections.forEach(function(section) {
        const category = section.getAttribute("data-category").toLowerCase();
        if (selectedGenre === "all" || category === selectedGenre) {
            section.style.display = "block";
        } else {
            section.style.display  = "none";
        }
    });
});
