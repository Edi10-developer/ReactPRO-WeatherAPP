import React from "react";
import axios from "axios";

import { Container, CardContainer } from "./styles";
import {
  SearchInput,
  MyPositionWeather,
  Card,
  Loading,
} from "./components/exports";
import { City } from "./pages/exports";

import { TodayDate } from "./utils";

//const PRIVATE_API_KEY = "bc6c3b7b884ca0c43cf9917e1f590a2e";
const PRIVATE_API_KEY = "4540026ebd7116fb0ed1c4187c3e41da";

class App extends React.Component {
  state = {
    city: "",
    searchedCities: [],
    isLoading: true,
    hasError: false,
    data: [],
    lat: 0,
    long: 0,
    icon: "",
  };

  getMyLocationWeather = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude,
        isLoading: true,
      });

      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=${PRIVATE_API_KEY}`
        );
        this.setState({
          data: [data],
          icon: data.weather.map((item) => item.icon),
          isLoading: false,
        });
      } catch (error) {
        console.error({ error });
      }
    });
  };

  handleSubmit = (city) => {
    const newCity = city;
    this.setState({ searchedCities: [...this.state.searchedCities, city] });
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.getMyLocationWeather();
    }, 500);
  };

  render() {
    return (
      <Container>
        {this.state.isLoading === false ? (
          this.state.data.map((item) => (
            <MyPositionWeather
              date={TodayDate}
              icon={this.state.icon}
              city={item.name}
              country={item.sys.country}
              mediumTemperature={item.main.temp}
              feelTemperature={item.main.feels_like}
            />
          ))
        ) : (
          <Loading />
        )}
        <SearchInput
          placeholder="search new place"
          onSubmit={(city) => this.handleSubmit(city)}
          type="text"
        />
        <CardContainer>
          {this.state.searchedCities.length > 0 &&
            this.state.searchedCities.map((item) => (
              <Card text={item.charAt(0).toUpperCase() + item.slice(1)} />
            ))}
        </CardContainer>
      </Container>
    );
  }
}
export default App;
