

const movieForm = document.querySelector("#movieForm");
const movieInput = document.querySelector("#movieInput");
const movieHub = document.querySelector("#movieHub");
const hamburger = document.querySelector("#hamburger");
const options = document.querySelector("#options");



movieForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let query = movieInput.value.trim()

    if (!query) { // if nothing found in search 
        return
    }
    console.log(query);
    searchMovie(query)
})

async function searchMovie(movieName) {

     movieHub.innerHTML = `<p>Searching Movie.....</p>`


    let response = await fetch(`https://www.omdbapi.com/?apikey=dec9bb17&s=${encodeURIComponent(movieName)}`);
    let data = await response.json()
    if(data.Response==="True"){
        displayMovies(data.Search)
    }
    else{
    movieHub.innerHTML = `<p>${data.Error}</p>`
    }
    // if(!data.Search){
    //     movieHub.innerHTML = `<p>${data.Error}</p>`
    // }
    
}

function displayMovies(movies) {

movieHub.innerHTML = "" // for new data => first clear previous one

    movies.forEach((movie) => {
        const div = document.createElement("div")

        div.dataset.imdbID = movie.imdbID
        div.setAttribute("class", "movie-card")

        div.innerHTML = ` <div>
            <div>
                <img src="${movie.Poster}" alt="">
            </div>
            <div>
                <p>${movie.Title}</p>
                <p>${movie.Year}</p>
            </div>
        </div>`

        movieHub.append(div)
    });
}

movieHub.addEventListener("click" , (e) => {
    e.stopPropagation();
    const movieCard = e.target.closest(".movie-card")
    const imdbID = movieCard.dataset.imdbID
    
    location.href = `movie_details.html?id=${imdbID}`

})
let data = [
    {
        "Title": "Kill Bill: Vol. 1",
        "Year": "2003",
        "imdbID": "tt0266697",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZmMyYzJlZmYtY2I3NC00NjAyLTkyZWItZjdjZDI1YTYyYTEwXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
    },
    {
        "Title": "Kill Bill: Vol. 2",
        "Year": "2004",
        "imdbID": "tt0378194",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BY2FiNzhiZTctNzU1Mi00NDkwLWExNDMtZTg0MjYyNzhkNWNkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    {
        "Title": "To Kill a Mockingbird",
        "Year": "1962",
        "imdbID": "tt0056592",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTlkYWU4MGEtZmQyYi00OWEzLTgzY2EtYzVjOTEzYzAyNTk1XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "A Time to Kill",
        "Year": "1996",
        "imdbID": "tt0117913",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmNiYzY1N2ItZDZiNC00ZGMyLWJlZjktZDE1MDI3NDBlYjE5XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Sin City: A Dame to Kill For",
        "Year": "2014",
        "imdbID": "tt0458481",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5ODYwNjgxMF5BMl5BanBnXkFtZTgwMTcwNzAyMjE@._V1_SX300.jpg"
    },
    {
        "Title": "Licence to Kill",
        "Year": "1989",
        "imdbID": "tt0097742",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjY3OWJkMjMtYTgwYS00MjJjLWE4M2ItOWVhOWMxNGM1NDk3XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "A View to a Kill",
        "Year": "1985",
        "imdbID": "tt0090264",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjc3ZTJkZjUtM2E4Mi00YzA1LWJkZTAtM2U0OWUyYTE4YTFiXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "3 Days to Kill",
        "Year": "2014",
        "imdbID": "tt2172934",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzM0MjE0Nzg1N15BMl5BanBnXkFtZTgwODA4ODE4MDE@._V1_SX300.jpg"
    },
    {
        "Title": "Righteous Kill",
        "Year": "2008",
        "imdbID": "tt1034331",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwMjg3MjY3OV5BMl5BanBnXkFtZTcwNTc4MDU3MQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Generation Kill",
        "Year": "2008",
        "imdbID": "tt0995832",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTM2NjAxOTQzNl5BMl5BanBnXkFtZTcwMjk4NzU3MQ@@._V1_SX300.jpg"
    }
];

displayMovies(data);

hamburger.addEventListener("click",(e) => {
    e.stopPropagation();

    options.classList.toggle("hidden");
    options.classList.toggle("flex");
    console.log(2);

})

