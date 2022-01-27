const form = document.querySelector("#form");
const movieDisplay = document.querySelector(".movie-result");
const movieSearchByUser= document.querySelector("#msearch");
const movieBody = document.querySelector(".movie-body");


async function getMovies(data){
    const res = await fetch(data);
    const resData = await res.json();
    console.log(resData);
    const title = resData.Title;
    const year = resData.Released;
    const image = resData.Poster;
    const rating = resData.imdbRating;
    const duration = resData.Runtime;
    console.log(title,year,rating,duration);
    movieBody.style.display = 'none';
    movieDisplay.innerHTML = `<h1 style= color:red >Movie- ${title}</h1>  <p> ${title} released in year ${year} </p> <p> IMDB rating is ${rating}</p>
    <p> Duration ${duration}</p><img src="${image}">`
    
}


form.addEventListener("submit",function(e){
    e.preventDefault();
    
    const searchTerm =movieSearchByUser.value;
    const apiKey = "8f802cb8";
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`;
   
    getMovies(url);

    
    })


