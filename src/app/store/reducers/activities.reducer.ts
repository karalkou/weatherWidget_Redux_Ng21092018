import { SELECT_CURRENT_ACTIVITY } from '../actions/activities.action';
import { GET_ITEMS_SUCCESS } from '../actions/items.action';

const initialState: string = '';

export function activitiesReducer(state = initialState, action: any) {
  switch (action.type) {

    case GET_ITEMS_SUCCESS: {
      return action.payload[0]._id;
    }

    case SELECT_CURRENT_ACTIVITY: {
      return action.payload;
    }

    default:
      return state;
  }
}
