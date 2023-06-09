import React from 'react';
import styled from 'styled-components';

const StyledChangeDayBtn = styled.button`
  font-size: 20px;
  color: rgb(232, 0, 0);
  background: none;
  border: none;
  text-transform: capitalize;
  transition: all ease 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(110%);
  }

  &:active {
    transform: scale(100%);
  }

  @media screen and (max-width: 740px) {
    font-size: 2vw;
  }
`;

const ChangeDayBtn = ({ children }) => {
  return <StyledChangeDayBtn>{children}</StyledChangeDayBtn>;
};

export default ChangeDayBtn;
