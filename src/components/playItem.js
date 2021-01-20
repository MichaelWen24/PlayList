import React from "react";
import { connect } from "react-redux";
import {
  handleToggleListened,
  handleToggleFavorite,
} from "../actions/PlayListActions";

function PlayItem(props) {
//   props.map((song) => {
    return (
      <>
        <li className="song-contianer" key={props.song.id}>
          <div className="song">
            <span className="artist">{props.song.artist}</span>
            <span className="track">{props.song.track}</span>
          </div>
          <div className="icons">
            <i
              className={
                props.song.listened
                  ? "headset-icon-listened ion-md-headset"
                  : "headset-icon ion-md-headset"
              }
              onClick={() => {
                props.handleToggleListenedAction(props.song.id);
              }}
            ></i>
            <i
              className={
                props.song.favorite
                  ? "like-icon ion-md-heart"
                  : "like-icon-empty ion-md-heart-empty"
              }
              onClick={() => {
                props.handleToggleFavoriteAction(props.song.id);
              }}
            ></i>
          </div>
        </li>
      </>
    );
//   });
}

const mapActionsToProps = (dispatch) => {
  return {
    handleToggleFavoriteAction: (id) => {
      dispatch(handleToggleFavorite(id));
    },
    handleToggleListenedAction: (id) => {
      dispatch(handleToggleListened(id));
    },
  };
};

export default connect(null, mapActionsToProps)(PlayItem);
