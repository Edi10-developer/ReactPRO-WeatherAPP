import { Container } from "./styles.js";
import { WiThermometer, WiStrongWind } from "react-icons/wi";

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
