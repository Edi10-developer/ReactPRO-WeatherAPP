import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, LinkStyled } from "./styles.js";
import { Loading, MyPositionWeather } from "../../components/exports.js";
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
  };

  getCity = async () => {
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

  componentDidMount = async () => {
    setTimeout(() => {
      this.getCity(this.state.city);
    }, 500);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.match.params.cityName !== this.props.match.params.cityName) {
      this.getCity(this.props.match.params.cityName);
    }
  };

  render() {
    return (
      <Container>
        {this.state.isLoading === true && this.state.hasError === false ? (
          <Loading />
        ) : this.state.hasError === false && this.state.isLoading === false ? (
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
