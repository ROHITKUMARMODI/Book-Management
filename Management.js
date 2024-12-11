document.getElementById("submit-btn").addEventListener("click", function () {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const summary = document.getElementById("summary").value;
    const isbn = document.getElementById("isbn").value;

    const genres = [];
    if (document.getElementById("fantasy").checked) genres.push("Fantasy");
    if (document.getElementById("sci-fi").checked) genres.push("Science Fiction");
    if (document.getElementById("poetry").checked) genres.push("Poetry");
    if (document.getElementById("action").checked) genres.push("Action");

     
    console.log({
        title,
        author,
        summary,
        isbn,
        genres
    });
 
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("summary").value = "";
    document.getElementById("isbn").value = "";
    alert("Book added successfully!");
});
