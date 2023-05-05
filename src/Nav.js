import React from "react";
import "./Nav.css";
import app from "./firebase"
import {  signOut ,getAuth} from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Nav() {
  const navigation = useNavigate();
  const logOut = () =>{
    const auth = getAuth(app);
    signOut(auth).then(()=>{
      window.localStorage.removeItem("accessToken")
      navigation("/signin")
    })
  }
  return (
    <div className="navbar">
      <img
        className="navbar_img"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="qq"
      />
      <div onClick={logOut}>

      <img
        className="navbar_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="qq"
        
        />
        </div>
    </div>
  );
}

export default Nav;
