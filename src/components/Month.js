import React from 'react';
import styled from 'styled-components';

const StyledMonth = styled.div`
  width: 73%;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  margin: 2% 5% 2% 0;
`;

const Month = ({ children }) => {
  return <StyledMonth>{children}</StyledMonth>;
};

export default Month;
