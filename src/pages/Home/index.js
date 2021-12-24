import React from "react";
import axios from "axios";

import { Container, CardContainer } from "./styles";
import {
  SearchInput,
  PositionWeather,
  Card,
  Loading,
  Button,
} from "../../components/exports";
import { TodayDate } from "../../utils/date";
import getURL from "../../utils/api";

class Home extends React.Component {
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

  clearSearchedCities = () => {
    localStorage.clear();
    this.setState({ searchedCities: [] });
  };

  getMyLocationWeather = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude,
        isLoading: true,
      });

      try {
        const url = getURL({ lat: this.state.lat, lon: this.state.long });
        const { data } = await axios.get(url);
        this.setState({
          data: [data],
          icon: data.weather.map((item) => item.icon),
          isLoading: false,
        });
      } catch (error) {
        console.log({ error });
      }
    });
  };

  handleSubmit = (city) => {
    if (this.state.searchedCities.find((element) => element === city)) return;
    localStorage.setItem(
      "cities",
      JSON.stringify([...this.state.searchedCities, city])
    );
    this.setState({
      searchedCities: [...this.state.searchedCities, city],
    });
  };

  componentDidMount = () => {
    const searchedCitiesLocalStorage = localStorage.getItem("cities");
    const searchedCities = JSON.parse(searchedCitiesLocalStorage) || [];

    if (searchedCities.length > 0) {
      this.setState({
        searchedCities: searchedCities,
      });
    }

    setTimeout(() => {
      this.getMyLocationWeather();
    }, 300);
  };

  render() {
    return (
      <Container>
        {this.state.isLoading === false ? (
          this.state.data.map((item) => (
            <PositionWeather
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
        {this.state.searchedCities.length > 0 && (
          <Button onClick={this.clearSearchedCities} text="Clear all" />
        )}
      </Container>
    );
  }
}
export default Home;
