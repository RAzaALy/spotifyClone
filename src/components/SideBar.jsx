import React from "react";
import SidebarOption from "./SidebarOption";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import "./SideBar.css";
import { Consumer } from "./StateProvider";
const SideBar = () => {
  const [{ playlists }, dispatch] = Consumer();
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
      {playlists?.items?.map((playlist, index) => (
        <SidebarOption title={playlist.name} key={index} />
      ))}
    </div>
  );
};

export default SideBar;
