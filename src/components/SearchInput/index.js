import React from "react";
import { FaFaSearch, StyledSearchInput, Container } from "./styles.js";

import { FaSearch } from "react-icons/fa";

class SearchInput extends React.Component {
  state = {
    city: "",
  };

  handleChange = (e) => this.setState({ city: e.target.value });
  //handleChange = (e) => this.props.searchedCity(e.targe.value);

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.city);
    this.setState({ city: "" });
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <FaSearch style={FaFaSearch} />
          <StyledSearchInput
            type={this.props.type}
            value={this.state.city}
            name={this.props.name}
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
          />
        </form>
      </Container>
    );
  }
}
export default SearchInput;
