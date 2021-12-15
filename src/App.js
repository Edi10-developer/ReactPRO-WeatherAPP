import React from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import { Container, cardcontainer, CardContainer } from "./styles";
import { SearchInput, MyPositionWeather, Card } from "./components/exports";
import { City } from "./pages/exports";
// Utils
const date = new Date();
//const PRIVATE_API_KEY = "bc6c3b7b884ca0c43cf9917e1f590a2e";
const PRIVATE_API_KEY = "4540026ebd7116fb0ed1c4187c3e41da";

class App extends React.Component {
  today = date.getDate();
  month = date.getMonth() + 1;
  year = date.getFullYear();

  state = {
    city: "",
    searchedCities: [],
    isLoading: false,
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
      });

      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=${PRIVATE_API_KEY}`
        );
        this.setState({
          data: [data],
          icon: data.weather.map((item) => item.icon),
        });
      } catch (error) {
        console.error({ error });
      }
    });
    //this.getCity(this.state.city);
  };

  getCity = async (newCity) => {
    this.setState({
      city: newCity,
    });
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${PRIVATE_API_KEY}`
      );
      this.setState({
        data: [data],
        searchedCities: [...this.state.searchedCities, this.state.city],
      });
    } catch (error) {
      console.error({ error });
    }
  };

  handleSubmit = (city) => {
    const newCity = city;
    this.setState({ searchedCities: [...this.state.searchedCities, city] });
  };

  componentDidMount = () => {
    this.getMyLocationWeather();
  };

  render() {
    const newIcon = this.state.data
      .map((item) => item.weather)
      .map((el) => el.icon);

    console.log("data: ", this.state.data);

    return (
      <Container>
        {this.state.data.map((item) => (
          <MyPositionWeather
            date={`${this.month}. ${this.today}. ${this.year}`}
            icon={this.state.icon}
            city={item.name}
            country={item.sys.country}
            mediumTemperature={item.main.temp}
            feelTemperature={item.main.feels_like}
          />
        ))}
        <SearchInput
          placeholder="search new place"
          onSubmit={(city) => this.handleSubmit(city)}
          type="text"
        />
        <CardContainer>
          {this.state.searchedCities.length > 0 &&
            this.state.searchedCities.map((item) => <Card text={item} />)}
        </CardContainer>
        <Router>
          <Routes>
            <Route exact path="/" component={App} />
            <Route path="/city" component={City} />
          </Routes>
        </Router>
      </Container>
    );
  }
}
export default App;
