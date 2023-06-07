import React from 'react';
import styled from 'styled-components';

const StyledBottomPannel = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgb(230, 230, 250);
  padding: 5px 50px;
  border-top: solid 0.5px #b8b8c8;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  @media screen and (max-width: 740px) {
    padding: 3% 6%;
  }
`;

const BottomPannel = ({ children }) => {
  return <StyledBottomPannel>{children}</StyledBottomPannel>;
};

export default BottomPannel;
