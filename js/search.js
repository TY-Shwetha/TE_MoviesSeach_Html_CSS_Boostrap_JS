
document.getElementById("searchText").onchange = function() {
    getMovies(document.getElementById("searchText").value)};

function getMovies(searchText) {
    console.log(searchText);
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=b1b5d454' + '&s=' + searchText)
        .then((response) => {
            console.log(response);
            let movies = response.data.Search;
            let output = '';
            movies.forEach((movie,index)=>{  
                output += `
                    <div class="card" style="width: 20rem; margin-right:22px;margin-bottom:20px">
                    <img src="`+movie.Poster+`" class="card-img-top" alt="...">
                        <div class="card-body">
                        
                        <h5 class="card-text">`+movie.Title+`</h5>
                        <h5 class="card-text">`+getRating(movie.imdbID)+`</h5> 
                      
                        </div>
                    </div>
                `;
            });
           document.getElementById("movies").innerHTML=output;
           
        }).catch((err) => {
            console.log(err);
        });
}


function getRating(id) {
  
    axios.get('http://img.omdbapi.com/?i=tt3896198&apikey=b1b5d454' + '&i=' + id)
        .then((response) => {
            console.log(response);
            let movie = response.data;
              `<h5>`+movie.imdbRating+`</h5>` ;   
        }).catch((err) => {
            console.log(err);
        });
}

getMovies("all");