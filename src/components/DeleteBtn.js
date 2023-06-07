import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteEvent } from '../state/action-creators';

const StyledBtn = styled.button`
  font-size: 2vw;
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
`;

const DeleteBtn = ({ children, numberOfEvent }) => {
  const dispatch = useDispatch();

  const handleClickOnDeleteBtn = (numberOfEvent) => {
    dispatch(deleteEvent(numberOfEvent));
  };

  return (
    <StyledBtn onClick={() => handleClickOnDeleteBtn(numberOfEvent)}>
      {children}
    </StyledBtn>
  );
};

export default DeleteBtn;
