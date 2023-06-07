import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  font-size: 16px;
  background: none;
  border: none;
  transition: all ease 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(110%);
  }

  @media screen and (max-width: 740px) {
    font-size: 2vw;
  }
`;

const ChangeMonthBtn = ({ date }) => {
  return <StyledBtn>{date}</StyledBtn>;
};

export default ChangeMonthBtn;
