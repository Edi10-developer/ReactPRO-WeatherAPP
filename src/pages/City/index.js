import React from "react";
import axios from "axios";
import { Container } from "./styles.js";

// Utils
const date = new Date();
//const PRIVATE_API_KEY = "bc6c3b7b884ca0c43cf9917e1f590a2e";
const PRIVATE_API_KEY = "4540026ebd7116fb0ed1c4187c3e41da";

class City extends React.Component {
  state = {
    city: this.props.match.params.cityName,
    isLoading: false,
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
      });
    } catch (error) {
      console.error({ error });
    }
  };

  componentDidMount = async () => {
    this.getCity(this.state.city);
    console.log("component city mounted");
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.match.params.cityName !== this.props.match.params.cityName) {
      this.getCity(this.props.match.params.cityName);
      console.log("component city updated");
    }
  };
  render() {
    console.log(this.props);
    console.log(this.state.data);
    return (
      <Container>
        <h1>{this.state.city}</h1>
        {this.state.data.map((item) => (
          <div>
            <p>{item.sys.country}</p>
            <p>{item.main.temp}</p>
            <p>feels like: {item.main.feels_like}</p>
          </div>
        ))}
      </Container>
    );
  }
}
export default City;
