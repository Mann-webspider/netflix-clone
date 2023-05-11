import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://www.youtube.com/embed/',
    headers: {'X-Requested-With': 'XMLHttpRequest',
    "X-Content-Type-Options":"nosniff",
"Content-Security-Policy": "frame-ancestors https://youtube.com",
"X-Frame-Options":"DENY"},
params:{
    autoplay:1,
    loop:1,
    controls:0,
    fs:0,
    cc_load_policy:1,
    modestbranding:1
}
})

export default instance