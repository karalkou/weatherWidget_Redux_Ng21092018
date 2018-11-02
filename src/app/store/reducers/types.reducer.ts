import { GET_ITEMS_SUCCESS } from '../actions/items.action';
import { SELECT_CURRENT_TYPE } from '../actions/types.action';

export interface IActivityType {
  type: string;
  name: string;
}

export interface IActivityTypesState {
  types: IActivityType[];
  currentType: IActivityType;
}

const initialState: IActivityTypesState = {
  types: [],
  currentType: {type: '', name: ''}
};

export function typesReducer(state = initialState, action: any) {
  switch (action.type) {

    case GET_ITEMS_SUCCESS: {
      const typeListArr: string[] = [];

      action.payload.forEach((item) => {
        typeListArr.push(item.type);
      });

      const typeList = Array.from(new Set(typeListArr))
        .map((item: string) => {
          return {
            type: item,
            name: item.charAt(0).toUpperCase() + item.slice(1)
          };
        });

      return {
        ...state,
        types: [...state.types, ...typeList],
        currentType: typeList[0]
      };
    }

    case SELECT_CURRENT_TYPE: {
      return {
        ...state,
        currentType: action.payload
      };
    }

    default:
      return state;
  }
}
