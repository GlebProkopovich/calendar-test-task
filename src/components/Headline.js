import React from 'react';
import styled from 'styled-components';

const StyledHeadline = styled.h1`
  font-size: 3vw;
  font-weight: 100;
  text-transform: capitalize;
`;

const Headline = ({ children }) => {
  return <StyledHeadline>{children}</StyledHeadline>;
};

export default Headline;
