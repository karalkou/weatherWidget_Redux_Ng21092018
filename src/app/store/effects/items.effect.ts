import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { GET_ITEMS_PENDING, GetItemsError, GetItemsSuccess } from '../actions/items.action';
import { BASE_URL_TOKEN } from '../../config';

@Injectable()
export class ItemsEffects {
  constructor(
    private _http: HttpClient,
    @Inject(BASE_URL_TOKEN) private _baseUrl: string,
    private actions$: Actions
  ) {
    console.log('---ItemsEffects');
  }

  // Listen for the 'LOGIN' action
  @Effect()
  items$: Observable<Action> = this.actions$.pipe(
    ofType(GET_ITEMS_PENDING),
    switchMap(() =>
      this._http.get(`${this._baseUrl}/items`)
        .pipe(
          map((res: any) => {
            return new GetItemsSuccess(res);
            // below lines are from classwork, but they don't work
            // console.log('res.data: ', res.data);
            // return new GetItemsSuccess(res.data);
          }),
          catchError((err) => of(new GetItemsError(err)))
        )
    )
  );

}
