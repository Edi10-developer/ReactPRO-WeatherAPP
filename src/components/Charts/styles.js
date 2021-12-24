import styled from "styled-components";
import { device } from "../../utils/responsiveDesign";

export const Container = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.78);
  padding: 10px;
  border-radius: 7px;
  margin: 10px;

  @media ${device.mobileS} {
    width: 20em;
    height: 200px;
  }
  @media ${device.laptop} {
    width: 15em;
    height: 180px;
  }
`;

export const ContainerDoughnut = styled.div`
  margin: 0 auto !important;
  padding: 15px;

  height: 180px;
  margin: 10px;
`;
