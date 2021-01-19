import React, { Component } from "react";

export default class PlayList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playList: [
        {
          id: 1,
          artist: "Oasis",
          track: "Half The World Away",
          listened: false,
          favorite: false,
        },
        {
          id: 2,
          artist: "Pink Floyd",
          track: "Wish You Were Here",
          listened: false,
          favorite: false,
        },
        {
          id: 3,
          artist: "Blink-182",
          track: "All The Small Things",
          listened: false,
          favorite: false,
        },
        {
          id: 4,
          artist: "Third Eye Blind",
          track: "Get Me Out Of Here",
          listened: false,
          favorite: false,
        },
        {
          id: 5,
          artist: "The Chainsmokers",
          track: "Closer",
          listened: false,
          favorite: false,
        },
        {
          id: 6,
          artist: "Sia",
          track: "Cheap Thrills",
          listened: false,
          favorite: false,
        },
        {
          id: 7,
          artist: "Birdy",
          track: "Wild Horses",
          listened: false,
          favorite: false,
        },
        {
          id: 8,
          artist: "Stereophonics",
          track: "Local Boy In The Photograph",
          listened: false,
          favorite: false,
        },
      ],
      listenedList: [],
      favoriteList: [],
    };
  }

  handleToggleListened = (id) => {
    const newPlayList = this.state.playList.map((song) => {
      if (song.id === id) {
        return { ...song, listened: !song.listened };
      } else {
        return song;
      }
    });
    this.setState({ playList: newPlayList });
  };

  handleToggleFavortie = (id) => {
    const newPlayList = this.state.playList.map((song) => {
      if (song.id === id) {
        return { ...song, favorite: !song.favorite };
      } else {
        return song;
      }
    });
    this.setState({ playList: newPlayList });
  };

  render() {
    return (
      <div className="All-List">
        <ul className="list-container">
          <li className="title">All Songs</li>
          {this.state.playList.map((song) => {
            return (
              <li className="song-contianer" key={song.id}>
                <div className="song">
                  <span className="artist">{song.artist}</span>
                  <span className="track">{song.track}</span>
                </div>
                <div className="icons">
                <i
                  className={song.listened ? "headset-icon-listened ion-md-headset" : "headset-icon ion-md-headset"}
                  onClick={() => {
                    this.handleToggleListened(song.id);
                  }}
                ></i>
                  <i
                    className={song.favorite ? "like-icon ion-md-heart" : "like-icon-empty ion-md-heart-empty"}
                    onClick={() => {
                      this.handleToggleFavortie(song.id);
                    }}
                  ></i>
                </div>
              </li>
            );
          })}
        </ul>

        <ul className="list-container">
        <li className="title">Listened</li>
          {this.state.playList.map((song) => {
            if (song.listened) {
              return (
                <li className="song-contianer" key={song.id}>
                  <div className="song">
                    <span className="artist">{song.artist}</span>
                    <span className="track">{song.track}</span>
                  </div>
                  <div className="icons">
                <i
                  className={song.listened ? "headset-icon-listened ion-md-headset" : "headset-icon ion-md-headset"}
                  onClick={() => {
                    this.handleToggleListened(song.id);
                  }}
                ></i>
                  <i
                    className={song.favorite ? "like-icon ion-md-heart" : "like-icon-empty ion-md-heart-empty"}
                    onClick={() => {
                      this.handleToggleFavortie(song.id);
                    }}
                  ></i>
                </div>
                </li>
              );
            } else {
              return "";
            }
          })}
        </ul>

        <ul className="list-container">
        <li className="title">Favorite</li>
          {this.state.playList.map((song) => {
            if (song.favorite) {
              return (
                <li className="song-contianer" key={song.id}>
                  <div className="song">
                    <span className="artist">{song.artist}</span>
                    <span className="track">{song.track}</span>
                  </div>
                  <div className="icons">
                <i
                  className={song.listened ? "headset-icon-listened ion-md-headset" : "headset-icon ion-md-headset"}
                  onClick={() => {
                    this.handleToggleListened(song.id);
                  }}
                ></i>
                  <i
                    className={song.favorite ? "like-icon ion-md-heart" : "like-icon-empty ion-md-heart-empty"}
                    onClick={() => {
                      this.handleToggleFavortie(song.id);
                    }}
                  ></i>
                </div>
                </li>
              );
            } 
            else {
              return "";
            }
          })}
        </ul>
      </div>
    );
  }
}
