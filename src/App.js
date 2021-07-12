import { Component } from "react";
import styles from "./App.module.css";
import images from "./images/01.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: [
        {
          weekDey: "Monday",
          imgURL: images,
          temp: "39C",
        },
        {
          weekDey: "Tuesday",
          imgURL: images,
          temp: "40C",
        },
        {
          weekDey: "Wednesday",
          imgURL: images,
          temp: "39C",
        },
        {
          weekDey: "Thursday",
          imgURL: images,
          temp: "37C",
        },
        {
          weekDey: "Friday",
          imgURL: images,
          temp: "35C",
        },
        {
          weekDey: "Saturday",
          imgURL: images,
          temp: "35C",
        },
        {
          weekDey: "Sunday",
          imgURL: images,
          temp: "39C",
        },
      ],
    };
  }

  render() {
    const { weather } = this.state;
    return weather.map((el, index) => {
      return (
        <div className={styles.card} key={index}>
          <img src={images} />
          <p>{el.weekDey}</p>
          <p>{el.temp}</p>
        </div>
      );
    });
  }
}

export default App;
