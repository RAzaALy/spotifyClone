import React from "react";
import SidebarOption from "./SidebarOption";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      {/* <img className="sidebar__logo" src="logo.svg" alt="logo" /> */}
      <div className="sidebar__container">
        <img src="logo.svg" alt="logo" className="sidebar__logo" />
        <h1>Spotify</h1>
      </div>
      <SidebarOption title="Home" Icon={HomeRoundedIcon} />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Libarary" />
      <br />
      <strong className="sidbar__title">Playlist</strong>
      <hr />
      <SidebarOption title="Dark Night" />
      <SidebarOption title="Coding Music" />
      <SidebarOption title="Love In fall" />
      <SidebarOption title="Hip Hop" />
    </div>
  );
};

export default SideBar;
