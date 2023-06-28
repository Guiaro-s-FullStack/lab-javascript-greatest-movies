// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  //   let directors = []

  //   for (let i = 0; i < moviesArray.length; i += 1) {
  //     directors.push(moviesArray[i].director)
  //   }
  //   return directors
  return moviesArray.map((movie) => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  // let dramaMovies = 0

  // for (let i = 0; i < moviesArray.length; i += 1) {
  //   if (moviesArray[i].director === 'Steven Spielberg') {
  //     for (let j = 0; j < moviesArray[i].genre.length; j += 1) {
  //       if (moviesArray[i].genre[j] === 'Drama') {
  //         dramaMovies += 1
  //       }
  //     }
  //   }
  // }

  // return dramaMovies
  return moviesArray.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  ).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0
  let sumScore = moviesArray.reduce((acc, movie) => {
    if (movie.score) {
      return acc + movie.score
    }
    return acc
  }, 0)
  console.log(parseFloat((sumScore / moviesArray.length).toFixed(2)))
  return parseFloat((sumScore / moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes('Drama')
  })
  return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
