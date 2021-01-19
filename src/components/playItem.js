import React from 'react'
import { connect } from "react-redux";
import { handleToggleListened, handleToggleFavorite } from '../actions/PlayListActions';

const mapStateToProps = (state) => {
    return {
        song: state.
    }
}

const mapActionToProps = (dispatch) => {
    return {
        handleToggleListenedAction: (song) => dispatch(handleToggleListened(song)),
        handleToggleFavorite: (song) => dispatch(handleToggleFavorite(song))
    }
}

export default function PlayItem({song}) {
    return (
        <>
            <li className="song-contianer" key={song.id}>
                <div className="song">
                  <span className="artist">{song.artist}</span>
                  <span className="track">{song.track}</span>
                </div>
                <div className="icons">
                  <i
                    className={
                      song.listened
                        ? "headset-icon-listened ion-md-headset"
                        : "headset-icon ion-md-headset"
                    }
                    onClick={() => {
                      dispatch(handleToggleListened(song.id));
                    }}
                  ></i>
                  <i
                    className={
                      song.favorite
                        ? "like-icon ion-md-heart"
                        : "like-icon-empty ion-md-heart-empty"
                    }
                    onClick={() => {
                      dispatch(handleToggleFavorite(song.id));
                    }}
                  ></i>
                </div>
              </li>
        </>
    );
}

export default connect ()(song);
