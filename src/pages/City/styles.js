import styled from "styled-components";
import { device } from "../../utils/responsiveDesign";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  color: white;
  background-image: url("https://images.unsplash.com/photo-1562742862-512efda35b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding-bottom: 20px;
`;

export const ChartsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
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
  width: "21.5rem",
};
