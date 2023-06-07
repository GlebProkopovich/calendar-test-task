import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  color: #e80000;
  font-size: 4vw;
  font-weight: 100;
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
`;

const AddBtn = ({ children, addEvent }) => {
  return <StyledBtn onClick={addEvent}>{children}</StyledBtn>;
};

export default AddBtn;
