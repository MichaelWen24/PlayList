import React from "react";
import PlayItem from "./playItem";
import { connect } from "react-redux";

// class PlayListRedux extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       playList: "",
//     };
//   }

function PlayListRedux(props){
//   render() {
    return (
      <div className="All-List">
        <ul className="list-container">
          <li className="title">All Songs</li>
          {props.playList.map((song) => {
            return (
              <PlayItem key={song.id} song={song} />
            );
          })}
        </ul>

        <ul className="list-container">
          <li className="title">Listened</li>
          {props.listenedList.map((song) => {
            return (
              <PlayItem key={song.id} song={song} />
            );
          })}
        </ul>

        <ul className="list-container">
          <li className="title">Favorite</li>
          {props.favoriteList.map((song) => {
            return (
              <PlayItem key={song.id} song={song} />
            );
          })}
        </ul>
      </div>
    );
//   }
}

const mapStateToProps = (state) => {
    const playList = state.playList;
    const favoriteList = playList.filter((song) => song.favorite);
    const listenedList = playList.filter((song) => song.listened);
    return {
        playList,
        favoriteList,
        listenedList,
    };
}

export default connect(mapStateToProps)(PlayListRedux);
