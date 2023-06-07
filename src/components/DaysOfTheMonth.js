import React from 'react';
import styled from 'styled-components';

const StyledDaysOfTheMonth = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const StyledDayOfTheMonth = styled.button`
  font-size: 1.5vw;
  font-weight: 300;
  text-transform: uppercase;
  padding: 1.5% 1.5%;
  margin: 1% 3%;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    color: #fff;
    border-radius: 50%;
    background: rgb(232, 0, 0);
  }
`;

const DaysOfTheMonth = ({ daysOfTheMonth }) => {
  return (
    <StyledDaysOfTheMonth>
      {daysOfTheMonth.map((el, idx) => {
        return <StyledDayOfTheMonth key={idx}>{el}</StyledDayOfTheMonth>;
      })}
    </StyledDaysOfTheMonth>
  );
};

export default DaysOfTheMonth;
