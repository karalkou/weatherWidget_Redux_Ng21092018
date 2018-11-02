import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { IActivityType, IActivityTypesState } from '../store/reducers/types.reducer';
import { WidgetModel } from '../types';
import { SelectCurrentActivity } from '../store/actions/activities.action';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private _store: Store<any>) {
  }

  public widgetData: WidgetModel[];
  public selectedType: IActivityType;

  @Output()
  public selectId: EventEmitter<string> = new EventEmitter();

  /**
   * Writes to redux store selected activity id
   * @param id - selected item's id
   */
  public getId(id) {
    this._store.dispatch(new SelectCurrentActivity(id));
  }

  ngOnInit() {

    this._store.select('items')
      .subscribe((data: WidgetModel[]) => {
        if (data.length > 0) {
          this.widgetData = data;
        }
      });

    this._store.select('menu')
      .subscribe((menu: IActivityTypesState) => {
        this.selectedType = menu.currentType;
      });
  }

}
