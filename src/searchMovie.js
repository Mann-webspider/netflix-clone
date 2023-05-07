import axios from "axios";

const instance = axios.create({
    baseURL:`https://api.themoviedb.org/3/movie/`,
    params:{
        api_key:"2908a45a1e4f49a68f83d5f6a6dbee42",
        append_to_response:"videos",
        language:"en-US"
    }
})
export default instance

// https://api.themoviedb.org/3/movie/603692?api_key=2908a45a1e4f49a68f83d5f6a6dbee42&append_to_response=videos