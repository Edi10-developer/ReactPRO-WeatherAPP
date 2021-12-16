import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, LinkStyle } from "./styles";
const Card = (props) => {
  const handleClick = () => props.onClick(props.text);

  return (
    <Container onClick={handleClick}>
      <Router>
        <Link to={`/${props.text}`} style={LinkStyle}>
          {props.text}
        </Link>
      </Router>
    </Container>
  );
};

export default Card;
