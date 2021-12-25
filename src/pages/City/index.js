import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  Container,
  ChartsContainer,
  LinkStyled,
  ChartDoughnutStyled,
} from "./styles.js";

import {
  Loading,
  PositionWeather,
  ChartBar,
  ChartDoughnut,
  CountryHolidays,
} from "../../components/exports.js";

import { TodayDate } from "../../utils/date";
import getURL from "../../utils/api.js";
import { Error } from "../exports";
import { TiArrowLeftThick } from "react-icons/ti";

class City extends React.Component {
  state = {
    city: this.props.match.params.cityName,
    country: "",
    isLoading: true,
    hasError: false,
    data: [],
    holidayData: [],
    icon: "",
    cityPic: "",
  };

  getCityWeather = async () => {
    try {
      const url = getURL({ q: this.state.city });
      const { data } = await axios.get(url);
      this.setState({
        country: data.sys.country,
        data: [data],
        icon: data.weather.map((item) => item.icon),
        isLoading: false,
      });
    } catch (error) {
      console.error({ error });
      this.setState({ hasError: true });
    }
  };

  componentDidMount = () => {
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
    console.log("state data country", this.state.country);
    return (
      <Container>
        {this.state.isLoading === true && this.state.hasError === false ? (
          <Loading />
        ) : this.state.hasError === false && this.state.isLoading === false ? (
          this.state.data.map((item) => (
            <>
              <PositionWeather
                date={TodayDate}
                icon={this.state.icon}
                city={item.name}
                country={item.sys.country}
                mediumTemperature={item.main.temp}
                feelTemperature={item.main.feels_like}
                humidity={item.main.humidity}
                wind={item.wind}
              />
              <ChartDoughnut
                labels={["Temperature", "Temp min", "Temp max", "% Humidity"]}
                datasets={[
                  {
                    data: [
                      item.main.temp - 273.5,
                      item.main.temp_min - 273.5,
                      item.main.temp_max - 273.5,
                      item.main.humidity,
                    ],
                    backgroundColor: [
                      "rgba(255, 158, 37, .8)",
                      "rgba(54, 162, 235, 0.5)",
                      "rgba(255, 39, 12, .6)",
                      "rgba(54, 162, 235, 0.9)",
                    ],
                    borderColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 1,
                  },
                  {
                    data: [
                      item.main.feels_like - 273.5,
                      item.main.temp - 273.5,
                    ],
                    backgroundColor: "rgba(0,0,0,.000)",
                    borderWidth: 1,
                  },
                ]}
                style={ChartDoughnutStyled}
              />
              <ChartsContainer>
                <ChartBar
                  labels={["Temperature/Temperature feels"]}
                  datasets={[
                    {
                      label: "temp",
                      data: [item.main.temp - 273.5],
                      backgroundColor: "rgba(54, 162, 235, 0.2)",
                      borderColor: "rgba(54, 162, 235, 1)",
                      borderWidth: 1,
                    },
                    {
                      label: "temp feels",
                      data: [item.main.feels_like - 273.5],
                      backgroundColor: "rgba(255, 99, 132, .2)",
                      borderColor: "rgba(255, 99, 132, 1)",
                      borderWidth: 1,
                    },
                  ]}
                />

                <ChartBar
                  labels={["Humidity"]}
                  datasets={[
                    {
                      label: "%",
                      data: [item.main.humidity],
                      backgroundColor: "rgba(54, 162, 235, 0.2)",
                      borderColor: "rgba(54, 162, 235, 1)",
                      borderWidth: 1,
                    },
                  ]}
                />

                <ChartBar
                  labels={["Temperature min/max"]}
                  datasets={[
                    {
                      label: "min",
                      data: [item.main.temp_min - 273.5],
                      backgroundColor: "rgba(54, 162, 235, 0.2)",
                      borderColor: "rgba(54, 162, 235, 1)",
                      borderWidth: 1,
                    },

                    {
                      label: "max",
                      data: [item.main.temp_max - 273.5],
                      backgroundColor: "rgba(255, 99, 132, .2)",
                      borderColor: "rgba(255, 99, 132, 1)",
                      borderWidth: 1,
                    },
                  ]}
                />
              </ChartsContainer>
              {this.state.holidayData.map((item) => (
                <div>
                  {item.date} - {item.localName}
                </div>
              ))}
              <CountryHolidays
                country={this.state.country}
                holidayData={this.state.holidayData}
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
