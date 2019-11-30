import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Searchbar from "./components/Searchbar";
import Movies from "./components/Movies";
import Ratingsearch from "./components/Ratingsearch";
import ModalComp from "./components/Modal";

export default class App extends Component {
  state = {
    movielist: [
      {
        img:
          "https://www.wallpaperflare.com/static/817/718/326/movies-assassin-s-creed-assassin-s-wallpaper.jpg",
        name: "Assassin's creed",
        releasedate: "2009",
        rate: 3
      },
      {
        img: "https://pbs.twimg.com/media/DuJo7oyXgAEUzWX.jpg",
        name: "Sonic",
        releasedate: "2019",
        rate: 4
      },
      {
        img: "http://hdqwalls.com/wallpapers/venom-movie-poster-2018-2c.jpg",
        name: "Venom",
        releasedate: "2019",
        rate: 4
      },
      {
        img:
          "https://playandgo.com.au/wp-content/uploads/2019/05/the-lion-king-movie-poster1.jpeg",
        name: "The Lion King",
        releasedate: "2019",
        rate: 5
      }
    ],

    stars: [false, false, false, false, false],
    input: "",
    shinystar: 0
  };

  handelChange = newval => {
    this.setState({
      input: newval
    });
  };

  changeRate = starIndex => {
    let arr = this.state.stars;
    for (let i = 0; i <= 4; i++) {
      if (i <= starIndex) {
        arr[i] = true;
      } else {
        arr[i] = false;
      }
      this.setState({ shinystar: starIndex + 1 });
    }

    this.setState({
      stars: arr
    });
  };

  addnewmovie = newMovie => {
    let arr = this.state.movielist;
    arr.push(newMovie);
    this.setState({
      movielist: arr
    });
  };

  render() {
    return (
      <div className="App">
        <div className="maj">
          <Searchbar handelChange={this.handelChange} />
          <Ratingsearch props={this.state.stars} changeRate={this.changeRate} />
          <Movies
            movielist={this.state.movielist}
            input={this.state.input}
            shinystar={this.state.shinystar}
          />
          <ModalComp addnewmovie={this.addnewmovie} />
        </div>
      </div>
    );
  }
}
