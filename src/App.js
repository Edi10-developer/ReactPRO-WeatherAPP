import React from "react";
import axios from "axios";

import { Container, cardcontainer } from "./styles";

// Utils
const date = new Date();
const PRIVATE_API_KEY = "bc6c3b7b884ca0c43cf9917e1f590a2e";

class App extends React.Component {
  today = date.getDate();
  month = date.getMonth() + 1;
  year = date.getFullYear();

  state = {
    searchedCity: "",
    city: "",
    searchedCities: [],
    myLocationWeather: [],
    isLoading: false,
    hasError: false,
    data: [],
    allData: [],
    lat: 0,
    long: 0,
    date: `${this.month}. ${this.today}. ${this.year}`,
  };

  getMyLocationWeather = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });

      try {
        const newLocationWeather = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=${PRIVATE_API_KEY}`
        );
        console.log("Data of my position: ", newLocationWeather);
        this.setState({
          city: newLocationWeather.data.name,
          myLocationWeather: newLocationWeather,
        });
      } catch (error) {
        console.error({ error });
      }
    });

    //  this.getCity(this.state.city);
  };

  componentDidMount = () => {
    this.getMyLocationWeather();
  };
  render() {
    console.log(this.state);
    return (
      <Container>
        <h1>Weather App</h1>
      </Container>
    );
  }
}
export default App;
