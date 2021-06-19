import React from "react";
import Header from "./Header";
import { Consumer } from "./StateProvider";
import "./Body.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import FavoriteIcon from "@material-ui/icons/Favorite";
const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = Consumer();
  return (
    <div className="body">
      <Header />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Coding Anthum</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs"></div>
      <div className="body__icons">
        <PlayCircleFilledWhiteIcon className="body__play" />
        <FavoriteIcon fontSize="large" />
        <MoreHorizIcon />
      </div>
      {/* list of songs */}
    </div>
  );
};

export default Body;
