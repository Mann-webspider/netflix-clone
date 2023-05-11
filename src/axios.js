import axios from 'axios'

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
//     headers: {'X-Requested-With': 'XMLHttpRequest',
//     "X-Content-Type-Options":"nosniff",
// "Content-Security-Policy": "default-src 'self' ",
// "Access-Control-Allow-Origin":"http://localhost:3000"
// },
})

export default instance