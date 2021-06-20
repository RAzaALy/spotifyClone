import React from "react";
import SideBar from "./SideBar";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";
const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        {/* sidebar */}
        <SideBar />
        {/* body */}
        <Body spotify={spotify} />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Player;
