import styled from "styled-components";
import { device } from "../../utils/responsiveDesign";

export const Container = styled.div`
  display: flex;
  padding: 25px;
  justify-content: center;
`;

export const StyledSearchInput = styled.input`
  padding: 15px;
  width: 300px;
  border-radius: 7px;
  border: none;

  @media ${device.mobileS} {
    width: 160px;
  }
  @media ${device.mobileM} {
    width: 200px;
  }
  @media ${device.mobileL} {
    width: 320px;
  }
  @media ${device.tablet} {
    width: 360px;
  }
`;

export const FaFaSearch = {
  color: "#ccc",
  backgroundColor: "white",
  padding: "14.5px",
  marginBottom: "-18px",
  marginRight: "-11px",
  borderRadius: "7px",
};
