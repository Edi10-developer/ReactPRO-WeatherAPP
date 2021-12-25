import styled from "styled-components";
import { device } from "../../utils/responsiveDesign";

export const Container = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.78);
  padding: 10px;
  border-radius: 7px;
  margin: 10px;

  @media ${device.mobileS} {
    width: 80%;
    height: 200px;
  }
  @media ${device.tablet} {
    width: 15em;
    height: 180px;
  }
`;

export const ContainerDoughnut = styled.div`
  margin: 10px auto !important;
  height: 200px;

  @media ${device.mobileS} {
    width: 86%;
  }
  @media ${device.tablet} {
    width: 50%;
  }
`;
