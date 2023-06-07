import React from 'react';
import styled from 'styled-components';

const StyledDaysOfTheMonth = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const StyledDayOfTheMonth = styled.button`
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  padding: 0.5% 14px;
  margin: 1% 22.7px;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    color: rgb(232, 0, 0);
  }

  @media screen and (max-width: 740px) {
    font-size: 1.5vw;
    padding: 1.5% 1.5%;
    margin: 1% 3%;
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
