import { GET_ITEMS_SUCCESS } from '../actions/items.action';
import { WidgetModel } from '../../types';

const initialState: WidgetModel[] = [];

export function itemsReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      console.log('itemsReducer');
      return action.payload;
    default:
      return state;
  }
}
