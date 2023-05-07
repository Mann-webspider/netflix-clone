import React, { useEffect } from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./request";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigation = useNavigate()
  useEffect(()=>{
    if(!window.localStorage.getItem("accessToken")){
      navigation("/signin")
    }

  },[])
  
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        title="NetflixOriginals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trendings" fetchURL={requests.fetchTrending}  />
      <Row title="theater" fetchURL={requests.fetchTheater}  />
      <Row title="move" fetchURL={requests.fetchmove}  />
      <Row title="Action" fetchURL={requests.fetchActionMovies} isLargeRow />
      {/* <Row title="top" fetchURL={requests.fetchTopRated} isLargeRow /> */}
      <Row
        title="Documentaries"
        fetchURL={requests.fetchDocumentaries}
        
      />
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies} isLargeRow />
       <Row title="Horror" fetchURL={requests.fetchHorroMovies} isLargeRow />
       
       
    </div>
  );
}

export default Home;
