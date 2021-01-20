import { HANDLE_TOGGLE_LISTENED, HANDLE_TOGGLE_FAVORITE } from "../actions/PlayListActions";
import { playList } from "../components/states"

const initialState = {
    playList: playList.playList
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_TOGGLE_LISTENED: {
        const songId = action.payload;
        let newListenedList = state.playList.map((song) => {
            if (song.id === songId) {
              return { ...song, listened: !song.listened };
            } else {
              return song;
            }
          });
          return {playList: newListenedList}; 
    }
        
    case HANDLE_TOGGLE_FAVORITE:{
        const songId = action.payload;
        let newFavoriteList = state.playList.map((song) => {
            if (song.id === songId) {
              return { ...song, favorite: !song.favorite };
            } else {
              return song;
            }
          });
          return {playList: newFavoriteList}; 
    }
    
    default:
      return state;
  }
};

export default reducer;
