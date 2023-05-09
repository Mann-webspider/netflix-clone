import React, { useState, useEffect } from "react";
import axios from "./axios";
import search from "./searchMovie"
import "./Row.css";
//dialog



import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

// import CloseIcon from '@mui/icons-material/Close';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const baseURL = `https://image.tmdb.org/t/p/w500`;

function Row({ title, fetchURL, isLargeRow }) {
  //featureing model when click on any movie
  
  //show title for large banner
  const[showTitle,setShowTitle] = useState(false);
  
  const [dialogMovie , setDialogMovie] = useState("");
  const [dialogMovieId , setDialogMovieId] = useState("");
  const [movies, setMovies] = useState([]);
  //dialog open close state
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('');
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('md');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  //handleing open close state for dialog
  const handleClickOpen = () => {
    setOpen(true);
    setScroll("body");
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  async function searchMovie(wsa){
    
    
      await search.get(wsa).then((res)=>{

      setDialogMovie(res.data);
      setDialogMovieId(res.data.videos.results[0].key)
      setDialogMovieId(res.data.videos.results.find(vid => vid.type === "Trailer").key);
      
    }).then(()=>{
      handleClickOpen()
    });
    
    // handleClickOpen();
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      
      return request;
    }
    fetchData();
  }, [fetchURL]);

  
 
  
  return (
    <>
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <div className={"hmm"} >
          <img
            className="row_poster"
            src={`${baseURL}${
              isLargeRow ?  movie.backdrop_path:movie.poster_path
            }`}
            alt={`${movie.title}`}
            key={`${movie.id}`}
            onClick={()=>{searchMovie(`${movie.id}`);}}
            onMouseOver={()=>{setShowTitle(true)}}
            onMouseLeave={()=>{setShowTitle(false)}}
            />
            <h5 className={showTitle?"show":'hide'} id="name" >{isLargeRow?movie.title:""}</h5>
          </div>
            
            ))}
      </div>
    </div>
    <Dialog
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        id="dialog"
        open={open}
        scroll={scroll}
        fullScreen={fullScreen}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
      >
        <DialogTitle id="responsive-dialog-title" onClose={handleClose}>
          {/* <YouTube videoId={dialogMovieId} onReady={onReady} opts={opts} className="youtube"/> */}
          <iframe src={`https://www.youtube.com/embed/${dialogMovieId}?autoplay=1&loop=1&controls=0&fs=0&cc_load_policy=1&modestbranding=1`} frameborder="0" className="youtube" title="p" ></iframe>
        </DialogTitle>
        <DialogContent dividers={scroll === 'body'} id="dialogContent">
          <h2>{dialogMovie.title}</h2>
          <h5>{dialogMovie.overview}</h5>
        </DialogContent>
        <DialogActions id="dialogAction">
        {/* <button>hello</button> */}
        </DialogActions>
      </Dialog>
      
            </>
  );
}

export default Row;
