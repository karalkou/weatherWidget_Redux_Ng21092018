import { Component, OnDestroy, OnInit } from '@angular/core';
import { WidgetModel } from './types';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { GetItemsPending } from './store/actions/items.action';
import { IActivityType, IActivityTypesState } from './store/reducers/types.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private _store: Store<any>) {
  }

  public widgetData$: Observable<WidgetModel[]>;
  public widgetDataHandled: WidgetModel[];
  public selectedDataItem: WidgetModel;
  public subscription: Subscription;
  public img: string = 'assets/images/1.jpg';

  /**
   * Gets first item of selected type to provide it to other modules
   * @param selectedType - selected type (hotels|fishing|tours)
   */
  public getFirstOfSelectedType(selectedType: IActivityType): void {
    if (!selectedType) {
      this.selectedDataItem = this.widgetDataHandled[0];
    }

    const filteredByTypeData: WidgetModel[] = this.widgetDataHandled.filter((item: WidgetModel) => {
      return item.type === selectedType.type;
    });

    this.selectedDataItem = filteredByTypeData[0];
  }

  /**
   * Gets selected activities item by it's id
   * @param id - id of activity item
   */
  public getItemById(id: string): void {
    [this.selectedDataItem] = this.widgetDataHandled.filter((item: WidgetModel) => {
      return item._id === id;
    });
  }

  ngOnInit(): void {
    this._store.dispatch(new GetItemsPending());
    this.widgetData$ = this._store.select('items');

    console.log('this._store: ', this._store);
    console.log('widgetData$: ', this.widgetData$); // в этой строке выводит Store {}. Почему?

    this.subscription = this.widgetData$
      .subscribe((data: WidgetModel[]) => {
        /**
         * это нормальная практика вот так чекать наличие данных или лучше в компоненты
         * или прокидывать поток <app-main [widgetData]="widgetDataHandled"></app-main> ?
         * или подключаться к стору внутри других компонентов ?
         */
        if (data.length > 0) {
          this.widgetDataHandled = data;
          this.selectedDataItem = this.widgetDataHandled[0];

          // this.getFirstOfSelectedType()

          this._store.select('menu')
            .subscribe((menu: IActivityTypesState) => {
              this.getFirstOfSelectedType( menu.currentType);
            });

          this._store.select('currentActivityId')
            .subscribe((id: string) => {
              this.getItemById(id);
            });
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
