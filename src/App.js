import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import { getToken } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
const spotify = new SpotifyWebApi();
const App = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getToken();
    window.location.hash = "";
    const _token = hash.access_token;
    // console.log(_token);
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log(user);
      });
    }
  }, []);
  return <div>{token ? <h1>I'm logged in to spotify 🚀</h1> : <Login />}</div>;
};

export default App;
