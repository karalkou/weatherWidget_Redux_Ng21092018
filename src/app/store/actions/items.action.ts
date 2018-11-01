import { WidgetModel } from '../../types';

export const GET_ITEMS_PENDING = 'GET_ITEMS_PENDING';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';

export class GetItemsPending {
  constructor() {
    console.log('GetItemsPending action');
  }

  public type = GET_ITEMS_PENDING;
}

export class GetItemsSuccess {
  public type = GET_ITEMS_SUCCESS;

  public constructor(public payload: WidgetModel[]) {
    console.log('GetItemsSuccess action');
  }
}

export class GetItemsError {
  public type = GET_ITEMS_ERROR;

  public constructor(public payload: any) {

  }
}
