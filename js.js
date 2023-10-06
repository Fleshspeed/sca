const elMovie = document.querySelector("#movie");
const elinput = document.querySelector("#input")
const elbutton = document.querySelector("#button")
const elLoading = document.querySelector("#loading")
const apiKey = "e4312694";
const showLoading = () => {
    elLoading.style.display = "block"
}

const hiddenLoading = () => {
    elLoading.style.display = "none"
}

function fetchMovies(searchQuery) {
    elMovie.innerHTML = "";

    const apiUrl = `https://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`;
    showLoading()
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            hiddenLoading()

            if (data.Search) {
                let movie = data.Search;

                movie.forEach((value) => {
                    const card = document.createElement("div");
                    const image = document.createElement("img");
                    const title = document.createElement("h1");
                    const subTitle = document.createElement("p");

                    image.src = value.Poster;
                    title.innerHTML = value.Title
                    subTitle.innerHTML = value.Year

                    card.append(image);
                    card.append(title);
                    card.append(subTitle)
                    elMovie.append(card);
                });
            }
        });
}






elbutton.addEventListener("click", () => {
    let value = elinput.value.trim();
    if (value !== "") {
        fetchMovies(value);
    }
})



elinput.addEventListener("keydown", (event) => {
if (event.key === "Enter") {
    let value = elinput.value.trim();
    if (value !== "") {
        fetchMovies(value);
    }
}
})

function showMovie() {
let movie = "Naruto";
fetchMovies(movie)
}

showMovie()