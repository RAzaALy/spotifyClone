//authentication point:
export const authPoint = "https://accounts.spotify.com/authorize";
//redirect Url
const redirectUrl = "http://localhost:3000/";
//client id:
const clientId = "8434edefb96045378d2e2235e22880a0";
//premission scope
const scopes = [
  "user-read-recently-played",
  "user-read-currently-playing",
  "user-modify-playback-state",
  "user-read-playback-state",
  "user-top-read",
];
//get token from url:
export const getToken = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};
//login Url
export const loginUrl = `${authPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
