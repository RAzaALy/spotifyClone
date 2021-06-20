import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import LoopIcon from "@material-ui/icons/Loop";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownRoundedIcon from "@material-ui/icons/VolumeDownRounded";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://i.scdn.co/image/ab67616d0000b273dddbac1b8d6c89231c4c4743"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>Optimistic Nihilism</h4>
          <p>Epic MountainKurzgesagt,Original)</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon className="footer__icon" fontSize="large" />
        <SkipNextIcon className="footer__icon" />
        <LoopIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon className="footer__icon" />
          </Grid>
          <Grid item>
            <VolumeDownRoundedIcon className="footer__icon" />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
