import React, { useEffect } from "react";
import "./Landing.css";
import Nav from "./Nav";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider ,getAuth, signInWithPopup,} from "firebase/auth";
import app from "./firebase"
function Landing() {
  const navigation = useNavigate();
  useEffect(()=>{
    if(window.localStorage.getItem("accessToken")){
      navigation("/")
    }
  })
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const onClickCtaBtn = () =>{
    if(!window.localStorage.getItem('accessToken')){

      signInWithPopup(auth,provider).then((res)=>{
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential.accessToken;
        window.localStorage.setItem("accessToken",token)
      
    }).then(()=>{
      navigation('/');
    }).catch((err)=>{
     
      console.log(err);
      
    })
  }
    

  }
  return (
    <div className="main">
      <Nav />
      <div className="hero">
        <img
          className="hero_img"
          src="http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg"
          alt=""
        />

        <div className="hero_contant">
          <div className="headline">Unlimited movies, TV shows and more.</div>
          <div className="subtitle">Watch anywhere .Cancel anytime.</div>
          <p className="cta_text">
            Ready to watch? Enter Your email to create or restart your
            membership
          </p>
          <div className="cta">
            <input className="input" type="email" placeholder="Email address" required  />
            <button className="cta_btn" onClick={onClickCtaBtn}>Get Started</button>
          </div>
        </div>
        <div className="fader" />
      </div>
      <div className="value_props">
        <div className="child child1">
          <div className="child_text">
            <h1 className="title">Enjoy on your TV.</h1>
            <h2 className="description">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h2>
          </div>
          <div className="child_img">
            <img
              className="img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt=""
            />
            <ReactPlayer
              url={
                "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              }
              playing={true}
              playsinline={true}
              autoPlay={true}
              width="100%"
              height="100%"
              muted={false}
              type="video/mp4"
            />
          </div>
        </div>
        <div className=" child child2">
          <div className="child_img">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt=""
            />
          </div>
          <div className="child_text">
            <h1 className="title">Download your shows to watch offline.</h1>
            <h2 className="description">
              Save your favourites easily and always have something to watch.
            </h2>
          </div>
        </div>
        <div className=" child child3">
          <div className="child_text">
            <p className="title">Watch everywhere.</p>
            <p className="description">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="child_img">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png
              "
              alt=""
            />
          </div>
        </div>
        <div className=" child child4">
          <div className="child_img">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png"
              alt=""
            />
          </div>
          <div className="child_text">
            <p className="title">Create profiles for children.</p>
            <p className="description">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export  default Landing;
