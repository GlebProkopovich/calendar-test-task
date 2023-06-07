let events = [];

for (let i = 0; i < 84; i++) {
  events.push(`${i}: 0`);
}

const initialState = {
  events,
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EVENT_ADDED':
      return {
        ...state,
        events: state.events.map((event, index) =>
          index === action.payload ? `${index}: 1` : event
        ),
      };
    case 'EVENT_DELETED':
      return {
        ...state,
        events: state.events.map((event, index) =>
          index === action.payload ? `${index}: 0` : event
        ),
      };
    default:
      return state;
  }
};
