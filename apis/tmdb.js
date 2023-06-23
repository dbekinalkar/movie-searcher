const { MovieDb } = require('moviedb-promise')

const moviedb = new MovieDb(process.env.TMDB_API_KEY)

export async function movieSearch(search) {
    return await moviedb.searchMovie({ query: search.replaceAll(" ", "%20") });
}

export async function movieDetails(id) {
    let res = moviedb.movieInfo({"id":id});
    return res;
}