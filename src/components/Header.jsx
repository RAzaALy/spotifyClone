import React from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import Avatar from "@material-ui/core/Avatar";
import { Consumer } from "./StateProvider";

import "./Header.css";
const Header = () => {
  const [{ user }] = Consumer();
  return (
    <div className="header">
      <div className="header__left">
        <SearchRoundedIcon />
        <input type="text" placeholder="Search for Artist,Albums,Songs" />
      </div>
      <div className="header__right">
        <Avatar
          src={user?.images[0].url}
          alt={user?.display_name}
          title={user?.display_name}
        />
      </div>
    </div>
  );
};
export default Header;
