import React, { Component } from "react";
import { playList } from "./states";
import PlayItem from "./playItem";

export default class PlayListRedux extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playList: "",
    };
  }

  render() {
    return (
      <div className="All-List">
        <ul className="list-container">
          <li className="title">All Songs</li>
          {playList.map((song) => {
            return (
              <PlayItem key={song.id} song={song} />
            );
          })}
        </ul>
      </div>
    );
  }
}
