import { StyledButton } from "./styles";

const Button = (props) => (
  <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
);

export default Button;
