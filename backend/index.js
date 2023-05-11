const express = require("express")
const cors = require("cors")
const path = require("path")
// const render = require("")
const app = express();
app.use(cors())
app.get("/",(req,res)=>{
    res.json({
        status:"not ok"
    })
})

app.get('/hello', async (req, res) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${req.params.id}`,
        {
          params: {
            api_key: 'YOUR_API_KEY',
            append_to_response: 'videos',
            language: 'en-US',
          },
        }
      );
        
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
app.listen(3001,()=>{
    console.log("port is listernenin");
})