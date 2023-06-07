export const setDeletedBtnOpened = (isDeleteBtnOpened, numberOfEvent) => ({
  type: 'DELETE_BTN_OPENED',
  payload: { isDeleteBtnOpened, numberOfEvent },
});

export const addEvent = (numberOfTheEvent) => ({
  type: 'EVENT_ADDED',
  payload: numberOfTheEvent,
});

export const deleteEvent = (numberOfTheEvent) => ({
  type: 'EVENT_DELETED',
  payload: numberOfTheEvent,
});
