import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 50px;

  @media screen and (max-width: 740px) {
    padding: 3% 6%;
  }
`;

const TitleAndAddBtnWrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default TitleAndAddBtnWrapper;
