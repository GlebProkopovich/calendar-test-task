import React from 'react';
import styled from 'styled-components';

const StyledDaysOfTheWeek = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const StyledDayOfTheWeek = styled.p`
  font-size: 1.5vw;
  font-weight: 300;
  text-transform: uppercase;
  padding: 2% 2%;
  margin: 1% 3%;
`;

const DaysOfTheWeek = ({ daysOfTheWeek }) => {
  return (
    <StyledDaysOfTheWeek>
      {daysOfTheWeek.map((el, idx) => {
        return <StyledDayOfTheWeek key={idx}>{el}</StyledDayOfTheWeek>;
      })}
    </StyledDaysOfTheWeek>
  );
};

export default DaysOfTheWeek;
