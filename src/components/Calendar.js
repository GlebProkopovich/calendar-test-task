import React, { useState } from 'react';
import styled from 'styled-components';
import Headline from './Headline';
import TitleAndAddBtnWrapper from './TitleAndAddBtnWrapper';
import AddBtn from './AddBtn';
import Date from './Date';
import DaysOfTheWeek from './DaysOfTheWeek';
import { daysOfTheWeek, daysOfTheMarch } from '../data';
import DaysOfTheMonth from './DaysOfTheMonth';
import Month from './Month';
import ChangeWeekBtn from './ChangeWeekBtn';
import ChangeMonthBtn from './ChangeMonthBtn';
import Time from './Time';
import Plan from './Plan';
import BottomPannel from './BottomPannel';
import ChangeDayBtn from './ChangeDayBtn';
import PlannedEvents from './PlannedEvents';
import DeleteBtn from './DeleteBtn';
import { useSelector } from 'react-redux';

const StyledCalendar = styled.div`
  width: 740px;
  background: #f5f5fd;
  border: solid 0.5px #b8b8c8;
  border-radius: 10px;

  @media screen and (max-width: 740px) {
    width: 60%;
  }
`;

const Calendar = () => {
  const [dateOfEvent, setDateOfEvent] = useState('');

  const isDeletedBtnOpened = useSelector(
    (state) => state.deleteButton.isOpened
  );

  const addEvent = () => {
    const answer = prompt(`Enter event time!\nExample: 28.03.19, 15:00`);
    answer && setDateOfEvent(answer);
  };

  const choosedNumberOfEvent = useSelector(
    (state) => state.deleteButton.numberOfEvent
  );

  return (
    <StyledCalendar>
      <TitleAndAddBtnWrapper>
        <Headline>interview calendar</Headline>
        <AddBtn addEvent={addEvent}>+</AddBtn>
      </TitleAndAddBtnWrapper>
      <Date>
        <DaysOfTheWeek daysOfTheWeek={daysOfTheWeek} />
        <DaysOfTheMonth daysOfTheMonth={daysOfTheMarch} />
        <Month>
          <ChangeWeekBtn sign={'<'} />
          <ChangeMonthBtn date={'March 2019'} />
          <ChangeWeekBtn sign={'>'} />
        </Month>
      </Date>
      <Plan>
        <Time />
        <PlannedEvents dateOfEvent={dateOfEvent} />
      </Plan>
      <BottomPannel>
        <ChangeDayBtn>today</ChangeDayBtn>
        {isDeletedBtnOpened && (
          <DeleteBtn numberOfEvent={choosedNumberOfEvent}>delete</DeleteBtn>
        )}
      </BottomPannel>
    </StyledCalendar>
  );
};

export default Calendar;
