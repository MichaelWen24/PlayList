import { HANDLE_TOGGLE_LISTENED, HANDLE_TOGGLE_FAVORITE } from "../actions/PlayListActions";
import { playList } from "../components/states"

export const reducer = (state = playList, action) => {
  switch (action.type) {
    case HANDLE_TOGGLE_LISTENED:
        let newListenedList = state.map((song) => {
            if (song.id === action.payload) {
              return { ...song, listened: !action.payload };
            } else {
              return song;
            }
          });
          return newListenedList; 

    case HANDLE_TOGGLE_FAVORITE:
        let newFavoriteList = state.map((song) => {
            if (song.id === action.payload) {
              return { ...song, favorite: !action.payload };
            } else {
              return song;
            }
          });
          return newFavoriteList; 

    default:
      return state;
  }
};
