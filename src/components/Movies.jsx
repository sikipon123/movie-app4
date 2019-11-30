import React, { Component } from "react";
import Card from "./Card";
class Movies extends Component {
  render() {
    return (
      <div className="portfolio">
        {this.props.movielist
          .filter(
            x =>
              x.name
                .toUpperCase()
                .includes(this.props.input.toUpperCase().trim()) &&
              x.rate >= this.props.shinystar
          )
          .map((el, i) => (
            <Card key={i} movie={el} />
          ))}

      </div>
    );
  }
}

export default Movies;
