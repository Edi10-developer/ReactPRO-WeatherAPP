import { Container } from "./styles.js";
import { WiThermometer } from "react-icons/wi";

const MyPositionWeather = (props) => {
  const calvinToCelsius = 273.15;
  const medTemperature = Math.round(props.mediumTemperature - calvinToCelsius);
  const feelingTemperatue = Math.round(props.feelTemperature - calvinToCelsius);
  return (
    <Container>
      <div>
        <img
          src={`http://openweathermap.org/img/w/${props.icon}.png`}
          alt={props.icon}
        />
        <h1>{medTemperature}°C </h1>
        <p>Feels like: {feelingTemperatue}°C</p>
        <h5>{props.date}</h5>
        <h2>
          {props.city}, {props.country}
        </h2>
        <div></div>
      </div>
    </Container>
  );
};
export default MyPositionWeather;
