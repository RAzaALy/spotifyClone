export const initialState = {
  user: null,
  item: null,
  playlists: [],
  playing: false,
  //Remvoe after finish developing
  token:
    "BQCkEg0wPO5MkFRCZwGGk_NsdceTuXHv4BgYOyoK2iKgHqTqKsocc7klcPdKml3pXJRwEjgb78aiJqLB48gntzQxwu54yrIk0sGgAK9U_nIcTuzkQsTHvA9MbqAH50KdYF0d2xqrtyntICbecR7uB40CCImODmPKjiu7f9N2Ns8EG0bq",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
