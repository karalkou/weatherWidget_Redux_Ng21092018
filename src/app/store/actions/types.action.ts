import { IActivityType } from '../reducers/types.reducer';

export const SELECT_CURRENT_TYPE = 'SELECT_CURRENT_TYPE';

export class SelectCurrentType {
  public constructor(public payload: IActivityType) {
    console.log('SelectCurrentType action');
  }

  public type = SELECT_CURRENT_TYPE;
}
