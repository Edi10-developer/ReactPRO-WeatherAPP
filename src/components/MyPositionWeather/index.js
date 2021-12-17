import { Container } from "./styles.js";
import { WiThermometer } from "react-icons/wi";

const MyPositionWeather = (props) => {
  const medTemperature = Math.round(
    ((props.mediumTemperature - 32) * (5 / 9)) / 10
  );

  const feelingTemperatue = Math.round(
    ((props.feelTemperature - 32) * (5 / 9)) / 10
  );

  return (
    <Container>
      <div>
        <img
          src={`http://openweathermap.org/img/w/${props.icon}.png`}
          alt={props.icon}
        />
        <h4>Today</h4>
        <p>{props.date}</p>

        <h2>
          {medTemperature} C <WiThermometer />
        </h2>
        <p>
          {props.city} {props.country}
        </p>
        <p>Feels like: {feelingTemperatue} C</p>
      </div>
    </Container>
  );
};
export default MyPositionWeather;
