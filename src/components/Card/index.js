import { Link } from "react-router-dom";
import { Container, LinkStyle } from "./styles";
const Card = (props) => {
  return (
    <Link to={`/${props.text}`} style={LinkStyle}>
      <Container> {props.text}</Container>
    </Link>
  );
};

export default Card;
