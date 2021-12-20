import { Container } from "./styles.js";
import { WiThermometer } from "react-icons/wi";

const MyPositionWeather = (props) => {
  const medTemperature = Math.round(props.mediumTemperature - 273.15);
  const feelingTemperatue = Math.round(props.feelTemperature - 273.15);
  return (
    <Container>
      <div>
        <img
          src={`http://openweathermap.org/img/w/${props.icon}.png`}
          alt={props.icon}
        />
        <h2>Today</h2>
        <p>{props.date}</p>
        <p>
          {props.city} {props.country}
        </p>
        <br />
        <span>
          <WiThermometer />
        </span>
        <h2>{medTemperature} C</h2>

        <p>Feels like: {feelingTemperatue} C</p>
      </div>
    </Container>
  );
};
export default MyPositionWeather;
