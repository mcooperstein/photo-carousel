import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://imgc.allpostersimages.com/img/posters/titanic_u-L-F4S6CQ0.jpg?src=gp&w=300&h=375",
        "https://imgc.allpostersimages.com/img/posters/the-terminator_u-L-F13M960.jpg?src=gp&w=300&h=375",
        "https://images-na.ssl-images-amazon.com/images/I/717QDxYBkbL._SY606_.jpg",
        "https://imgc.allpostersimages.com/img/posters/pulp-fiction-cover-with-uma-thurman-movie-poster_u-L-F13MQF0.jpg?src=gp&w=300&h=375",
        "http://img.moviepostershop.com/step-brothers-movie-poster-2008-1020407830.jpg"
      ],
      currentImg: 0
    };
  }
  rotateImagesRight = () => {
    let currentVal = this.state.currentImg;
    let newVal;
    if (currentVal === this.state.images.length - 1) {
      newVal = 0;
    } else {
      newVal = currentVal + 1;
    }

    this.setState({
      currentImg: newVal
    });
  };
  rotateImagesLeft = () => {
    let currentVal = this.state.currentImg;
    let newVal;
    if (currentVal === 0) {
      newVal = this.state.images.length - 1;
    } else {
      newVal = currentVal - 1;
    }

    this.setState({
      currentImg: newVal
    });
  };
  render() {
    return (
      <div className="App" style={styles.container}>
        <button style={styles.buttonLeft} onClick={this.rotateImagesLeft}>
          LEFT
        </button>
        <div>
          <img
            style={{ height: 400 }}
            src={this.state.images[this.state.currentImg]}
          />
        </div>
        <button onClick={this.rotateImagesRight}>RIGHT</button>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 500,
    border: "2px solid black"
  },
  buttonLeft: {
    justifyContent: "center",
    alignItems: "center"
  },
  buttonRight: {
    justifyContent: "center",
    alignItems: "center"
  }
};

export default App;
