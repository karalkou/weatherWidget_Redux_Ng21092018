import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WidgetModel } from '../types';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SelectCurrentType } from '../store/actions/types.action';
import { firstLetterUpperCase } from '../utils';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private _store: Store<any>) {
  }

  public widgetData$: Observable<WidgetModel[]>;
  public widgetData: WidgetModel[];

  public selectedType: string;
  public typeList: Array<{ type: string, name: string }>;

  /**
   * Gets selected type and writes it to redux store
   * @param e - event object
   */
  public getType(e: MouseEvent) {
    e.preventDefault();
    const target: HTMLElement = e.target as HTMLElement;

    this.selectedType = target.dataset.type;

    this._store.dispatch(
      new SelectCurrentType({
        type: this.selectedType,
        name: firstLetterUpperCase(this.selectedType),
      }
    ));
  }

  ngOnInit() {
    const typeListArr: string[] = [];

    this.widgetData$ = this._store.select('items');

    this.widgetData$
      .subscribe((data: WidgetModel[]) => {
        this.widgetData = data;
      });

    this.widgetData.forEach((item) => {
      typeListArr.push(item.type);
    });

    // непонятная ошибка с Set. Поставил downlevelIteration, но не пропадает
    this.typeList = [...(new Set(typeListArr))]
      .map((item) => {
        return {
          type: item,
          name: item.charAt(0).toUpperCase() + item.slice(1)
        };
      });

  }
}
