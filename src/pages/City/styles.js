import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding-bottom: 20px;
`;
export const ChartsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LinkStyled = {
  color: "white",
  textDecoration: "none",
  margin: "20px",
};

export const ChartDoughnutStyled = {
  backgroundColor: "white",
  padding: "10px",
  borderRadius: "5px",
  width: "500px",
};
