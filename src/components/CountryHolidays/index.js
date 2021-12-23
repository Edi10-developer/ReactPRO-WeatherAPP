import React from "react";
import axios from "axios";
import { Button } from "../exports";
import { year } from "../../utils/date";
import { Container } from "./styles";

class CountryHolidays extends React.Component {
  state = {
    hasHoliday: false,
    holidayData: [],
  };

  getPublicHolidays = async () => {
    try {
      const { data } = await axios.get(
        `https://date.nager.at/api/v3/publicholidays/${year}/${this.props.country}`
      );
      this.setState({
        hasHoliday: true,
        holidayData: data,
      });
    } catch (error) {
      console.log({ error });
      this.setState({ hasError: true });
    }
  };

  clearHolidays = () =>
    this.setState({
      hasHoliday: false,
      holidayData: [],
    });

  render() {
    return (
      <>
        {this.state.hasHoliday === false ? (
          <Button onClick={this.getPublicHolidays} text="Public Holidays" />
        ) : (
          <Button onClick={this.clearHolidays} text="Close Holidays" />
        )}
        <Container>
          <div>
            {this.state.holidayData.map((item) => (
              <p>
                <span>{item.date}:</span> {item.localName}
              </p>
            ))}{" "}
          </div>
        </Container>
      </>
    );
  }
}

export default CountryHolidays;
