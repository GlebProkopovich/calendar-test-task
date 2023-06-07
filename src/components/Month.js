import React from 'react';
import styled from 'styled-components';

const StyledMonth = styled.div`
  width: 535px;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  margin: 0px 5% 0px 0;

  @media screen and (max-width: 740px) {
    width: 73%;
    margin: 2% 5% 2% 0;
  }
`;

const Month = ({ children }) => {
  return <StyledMonth>{children}</StyledMonth>;
};

export default Month;
