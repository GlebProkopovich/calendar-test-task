import React from 'react';
import styled from 'styled-components';
import { time } from '../data';

const StyledTimes = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTime = styled.p`
  font-size: 2vw;
  padding: 20%;
  color: #8a8a96;
`;

const Time = () => {
  return (
    <StyledTimes>
      {time.map((el, idx) => {
        return <StyledTime key={idx}>{el}</StyledTime>;
      })}
    </StyledTimes>
  );
};

export default Time;