import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  color: rgb(232, 0, 0);
  font-size: 2vw;
  font-weight: 100;
  background: none;
  border: none;
  transition: all ease 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(150%);
  }
`;

const ChangeWeekBtn = ({ sign }) => {
  return <StyledBtn>{sign}</StyledBtn>;
};

export default ChangeWeekBtn;
