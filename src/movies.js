// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
  const allDirectors =  moviesArray.map (movie => movie.director)
//   console.log(allDirectors);
  return allDirectors
} 

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    // console.log(spielbergMovies);
    return spielbergMovies.length;
}
howManyMovies(movies);


// // const ages = people.reduce((sum, person) => {
//     return sum + person.age;
//   }, 0); // initialValue to 0

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) { return 0; }   
    const sumScore = moviesArray.reduce((accumulator, currentValue) => {
        
        if (typeof(currentValue.score) !== "undefined"){
            // console.log(currentValue.score);
            return accumulator + currentValue.score;
        }
        
        
    }, 0);
    let avgScore = sumScore/moviesArray.length;
    // console.log(avgScore.toFixed(2));
    return avgScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
    const dramaMovies = [...moviesArray].filter(dramaMovie => dramaMovie.genre.includes("Drama")) 
    if (dramaMovies.length === 0) { return 0; }   
    const scoreDramaMovies = dramaMovies.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.score;
    },0); 
    console.log(scoreDramaMovies);

    let avgDramaMoviesScore = scoreDramaMovies/dramaMovies.length;
    console.log(avgDramaMoviesScore);
    return avgDramaMoviesScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    // const sortedMoviesArray = [...moviesArray].sort((a, b) => {
    //     if (a < b) return -1; // a is less than b
    //     if (a > b) return 1; // a is greater than b
    //     if (a === b) return 0; // a equals b
    //   })
    const sortedMoviesArray = [...moviesArray].sort((a, b) => b - a) 
    // console.log(sortedMoviesArray);
    return sortedMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
