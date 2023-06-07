import { combineReducers } from 'redux';
import { isDeleteBtnOpenedReducer } from './isDeleteBtnOpenedReducer.js';
import { eventReducer } from './eventsReducer.js';

export const reducers = combineReducers({
  deleteButton: isDeleteBtnOpenedReducer,
  eventsInfo: eventReducer,
});
