import React from 'react';
import styled from 'styled-components';

const StyledDaysOfTheWeek = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const StyledDayOfTheWeek = styled.p`
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  padding: 0.5% 17.5px;
  margin: 1% 3%;

  @media screen and (max-width: 740px) {
    font-size: 1.5vw;
    padding: 2% 2%;
  }
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
