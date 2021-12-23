import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  text-decoration: dotted;

  div {
    text-align: left;
    margin: 0 auto;
  }
  span {
    color: rgba(54, 162, 235, 1);
    text-decoration: none !important;
    font-weight: 600;
  }
`;
