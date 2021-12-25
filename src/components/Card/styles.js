import styled from "styled-components";
import { device } from "../../utils/responsiveDesign";

export const Container = styled.div`
  display: flex;
  margin: 10px;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  justify-content: center;
  align-items: center;

  @media ${device.mobileS} {
    width: 170px;
    height: 210px;
    font-size: 28px;
  }

  @media ${device.tablet} {
    width: 140px;
    height: 200px;
    font-size: 25px;
  }
`;

export const LinkStyle = {
  color: "#333333",
  textDecoration: "none",
};
