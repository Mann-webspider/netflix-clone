// const API_KEY = "6e331a08a4fc9cd17f0487cd7b59cb82";
const API_KEY = "2908a45a1e4f49a68f83d5f6a6dbee42";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
  fetchTopRated: `/movies/top_rated?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&append_to_response=videos`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=25&append_to_response=videos`,
  fetchHorroMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&append_to_response=videos`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&append_to_response=videos`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&append_to_response=videos`,
  fetchmove:`/discover/movie?api_key=${API_KEY}&language=en-US&region=IN&sort_by=popularity.desc&page=1&append_to_response=videos`,
  fetchTheater:`/discover/movie?api_key=${API_KEY}&with_genres=18 &sort_by=vote_average&vote_count.gte=10&append_to_response=videos`
};

export default requests;
