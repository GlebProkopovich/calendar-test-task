const initialState = {
  isOpened: false,
  numberOfEvent: null,
};

export const isDeleteBtnOpenedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_BTN_OPENED':
      return {
        ...state,
        isOpened: action.payload.isDeleteBtnOpened,
        numberOfEvent: action.payload.numberOfEvent,
      };
    default:
      return state;
  }
};
