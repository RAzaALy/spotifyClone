import React, { useEffect } from "react";
import Login from "./components/Login";
import Player from "./components/Player";
import { Consumer } from "./components/StateProvider";
import { getToken } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ user, token }, dispatch] = Consumer();

  useEffect(() => {
    const hash = getToken();
    window.location.hash = "";
    const _token = hash.access_token;
    // console.log(_token);
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        // console.log(user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("37i9dQZF1DX5trt9i14X7j").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, []);
  // console.log(user);
  // console.log("token",token);
  return <div>{token ? <Player spotify={spotify} /> : <Login />}</div>;
};

export default App;
