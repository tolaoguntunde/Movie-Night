const form = document.querySelector("#form");
const movieDisplay = document.querySelector(".movie-result");
const movieSearchByUser= document.querySelector("#msearch");
const movieBody = document.querySelector(".movie-body");


async function getMovies(data){
    const res = await fetch(data);
    const resData = await res.json();
    console.log(resData);
    const title = resData.Title;
    const image = resData.Poster;
    const rating = resData.imdbRating;
    const box = resData.BoxOffice;
    const duration = resData.Runtime;
    const plot = resData.Plot;
    // console.log(title,year,rating,duration);
    movieBody.style.display = 'none';
    movieDisplay.innerHTML = `<h2 class="title" >Movie - ${title}</h2> 
    <img src="${image}">
    <p class="plot"> ${plot}</p>
    <p class='box'>Box office: ${box}</p>
    <p class="rating"> IMDB rating: ${rating} / 10 </p>`
    
}


form.addEventListener("submit",function(e){
    e.preventDefault();
    
    const searchTerm =movieSearchByUser.value;
    const apiKey = "8f802cb8";
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`;
   
    getMovies(url);

    
    })


