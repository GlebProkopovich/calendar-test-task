import React from 'react';
import styled from 'styled-components';

const StyledHeadline = styled.h1`
  font-size: 20px;
  font-weight: 100;
  text-transform: capitalize;

  @media screen and (max-width: 740px) {
    font-size: 3vw;
  }
`;

const Headline = ({ children }) => {
  return <StyledHeadline>{children}</StyledHeadline>;
};

export default Headline;
