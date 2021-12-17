import { Container } from "./styles.js";
import { FaSpinner } from "react-icons/fa";

const Loading = () => (
  <Container>
    <h1>
      <FaSpinner /> Loading...
    </h1>
  </Container>
);

export default Loading;
