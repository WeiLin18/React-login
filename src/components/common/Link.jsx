import React from "react";
import styled from "styled-components";
import { color } from "../../style/variables";
import "../../style/styles.scss";
const StyledLink = styled.a`
  color: ${color.primary};
  cursor: pointer;
`;
const Link = ({ className, children }) => {
  return <StyledLink className={className}>{children}</StyledLink>;
};

export default Link;
