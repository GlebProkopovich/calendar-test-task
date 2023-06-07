import React from 'react';
import styled from 'styled-components';

const StyledDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #e6e6fa;
  padding-right: 2%;
  border-top: solid 0.5px #b8b8c8;
  border-bottom: solid 0.5px #b8b8c8;
`;

const Date = ({ children }) => {
  return <StyledDateContainer>{children}</StyledDateContainer>;
};

export default Date;
