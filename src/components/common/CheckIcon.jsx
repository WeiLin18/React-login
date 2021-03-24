import React from "react";
import styled from "styled-components";
import { color } from "../../style/variables";

const StyledDiv = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${color.primary};
  box-shadow: 3px 3px 5px ${color.primaryLight};
`;
const CheckIcon = ({ className }) => {
  return (
    <StyledDiv className={className}>
      <svg width="36" height="36" viewBox="0 0 80 80">
        <polyline
          points="25,43 38,58 58,28"
          style={{
            fill: "none",
            stroke: "#ffff",
            strokeWidth: "5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }}
        ></polyline>
      </svg>
    </StyledDiv>
  );
};

export default CheckIcon;
