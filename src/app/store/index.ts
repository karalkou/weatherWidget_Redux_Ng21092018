import { itemsReducer } from './reducers/items.reducer';
import { typesReducer } from './reducers/types.reducer';
import { activitiesReducer } from './reducers/activities.reducer';

export const reducers = {
  items: itemsReducer,
  menu: typesReducer,
  currentActivityId: activitiesReducer,
};
