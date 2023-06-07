import React, { useEffect } from 'react';
import styled from 'styled-components';
import { daysOfTheMarch, time } from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { setDeletedBtnOpened } from '../state/action-creators';
import { addEvent } from '../state/action-creators';

const StyledPlannedEvents = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(12, 1fr);
  padding: 0 1% 0 8%;

  @media screen and (max-width: 740px) {
  }
`;

const StyledEvent = styled.button`
  background: ${(props) => props.backgroundColor || 'none'};
  border: none;
  border-right: solid 0.5px #b8b8c8;
  border-bottom: solid 0.5px #b8b8c8;
  cursor: pointer;

  &:nth-child(7n) {
    border-right: none;
  }

  &:nth-child(n + 78):nth-child(-n + 84) {
    border-bottom: none;
  }

  &:hover {
    background: rgb(230, 230, 250);
  }

  &:hover {
    background: ${(props) => props.eventHover};
  }
`;

const PlannedEvents = ({ dateOfEvent }) => {
  const dispatch = useDispatch();

  const events = useSelector((state) => state.eventsInfo.events);

  const handleClickOnEvent = (isDeleteBtnOpened, numberOfEvent) => {
    dispatch(setDeletedBtnOpened(isDeleteBtnOpened, numberOfEvent));
  };

  const addEventToCalendar = () => {
    const date = dateOfEvent.split(',');
    const dayOfMonth = date[0]?.split('.')[0];
    const choosedTime = date[1]?.trim();
    const numberOfEvent =
      daysOfTheMarch.indexOf(Number(dayOfMonth)) +
      time.indexOf(choosedTime) * 7;

    const isValidEvent =
      daysOfTheMarch.includes(Number(dayOfMonth)) && time.includes(choosedTime);

    return isValidEvent
      ? (alert('Событие успешно добавлено'), dispatch(addEvent(numberOfEvent)))
      : alert(
          'Данные введены некорректно. Удостоверьтесь, что указываемое число открыто на календаре и выбранное время доступно для выбора'
        );
  };

  useEffect(() => {
    dateOfEvent && addEventToCalendar();
  }, [dateOfEvent]);

  return (
    <StyledPlannedEvents>
      {events.map((el, idx) => {
        return (
          <StyledEvent
            onClick={() => {
              el.split(':')[1].trim() === '1'
                ? handleClickOnEvent(true, idx)
                : handleClickOnEvent(false, idx);
            }}
            key={idx}
            backgroundColor={
              el.split(':')[1].trim() === '1' && 'rgb(184, 184, 200)'
            }
            eventHover={el.split(':')[1].trim() === '1' && 'rgb(156, 156, 156)'}
          />
        );
      })}
    </StyledPlannedEvents>
  );
};

export default PlannedEvents;
