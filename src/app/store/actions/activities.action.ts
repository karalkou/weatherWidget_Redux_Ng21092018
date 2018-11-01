import { IActivityType } from '../reducers/types.reducer';

export const SELECT_CURRENT_ACTIVITY = 'SELECT_CURRENT_ACTIVITY';

export class SelectCurrentActivity {
  public constructor(public payload: string) {
    console.log('SelectCurrentActivity action');
  }

  public type = SELECT_CURRENT_ACTIVITY;
}
