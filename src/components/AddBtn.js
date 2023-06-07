import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  font-size: 30px;
  font-weight: 100;
  color: #e80000;
  background: none;
  border: none;
  transition: all ease 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(130%);
  }

  &:active {
    transform: scale(100%);
  }

  @media screen and (max-width: 740px) {
    font-size: 4vw;
  }
`;

const AddBtn = ({ children, addEvent }) => {
  return <StyledBtn onClick={addEvent}>{children}</StyledBtn>;
};

export default AddBtn;
