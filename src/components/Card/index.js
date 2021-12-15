import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, LinkStyle } from "./styles";
const Card = (props) => {
  const onClick = () => props.onClick(props.text);

  return (
    <Container onClick={onClick}>
      <Router>
        <Link to="/city" style={LinkStyle}>
          {props.text}
        </Link>
      </Router>
    </Container>
  );
};

export default Card;
