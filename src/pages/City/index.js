import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, LinkStyled } from "./styles.js";

import {
  Loading,
  MyPositionWeather,
  MyChart,
} from "../../components/exports.js";
import { TodayDate } from "../../utils/index";
import { Error } from "../exports";
import { TiArrowLeftThick } from "react-icons/ti";

//const PRIVATE_API_KEY = "bc6c3b7b884ca0c43cf9917e1f590a2e";
const PRIVATE_API_KEY = "4540026ebd7116fb0ed1c4187c3e41da";

class City extends React.Component {
  state = {
    city: this.props.match.params.cityName,
    isLoading: true,
    hasError: false,
    data: [],
    icon: "",
    cityPic: "",
    // data30Days: {},
  };

  getCityWeather = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${PRIVATE_API_KEY}`
      );
      this.setState({
        data: [data],
        icon: data.weather.map((item) => item.icon),
        isLoading: false,
      });
    } catch (error) {
      console.error({ error });
      this.setState({ hasError: true });
    }
  };

  /*  getCityWeatherForDays = async () => {
    try {
      const data30Days = await axios.get(
        `https://pro.openweathermap.org/data/2.5/forecast/climate?q=${this.state.city}&appid=${PRIVATE_API_KEY}`
      );
      this.setState({
        data30Days: [data30Days],
        isLoading: false,
      });
    } catch (error) {
      console.error({ error });
      this.setState({ hasError: true });
    }
  }; */

  componentDidMount = async () => {
    setTimeout(() => {
      this.getCityWeather(this.state.city);
    }, 300);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.match.params.cityName !== this.props.match.params.cityName) {
      this.getCityWeather(this.props.match.params.cityName);
    }
  };

  render() {
    console.log(this.state.data);
    return (
      <Container>
        {this.state.isLoading === true && this.state.hasError === false ? (
          <Loading />
        ) : this.state.hasError === false && this.state.isLoading === false ? (
          this.state.data.map((item) => (
            <>
              <MyPositionWeather
                date={TodayDate}
                icon={this.state.icon}
                city={item.name}
                country={item.sys.country}
                mediumTemperature={item.main.temp}
                feelTemperature={item.main.feels_like}
                humidity={item.main.humidity}
                wind={item.wind}
              />
              <MyChart
                dataPlus={[
                  item.main.temp - 273.5,
                  item.main.temp_max - 273.5,
                  item.main.humidity,
                  item.wind.speed,
                ]}
                dataMinus={[
                  item.main.feels_like - 273.5,
                  item.main.temp_min - 273.5,
                ]}
              />
            </>
          ))
        ) : (
          <Error />
        )}
        <Link to="/" style={LinkStyled}>
          <TiArrowLeftThick /> Back
        </Link>
      </Container>
    );
  }
}
export default City;
