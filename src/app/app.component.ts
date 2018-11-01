import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { WidgetModel } from './types';
import { widgetData$ } from '../assets/fixtures/data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public widgetDataHandled: WidgetModel[];
  public selectedDataItem: WidgetModel;
  public subscription: Subscription;
  public img: string = 'assets/images/1.jpg';

  /**
   * Gets first item of selected type to provide it to other modules
   * @param selectedType - selected type (hotels|fishing|tours)
   */
  public getFirstOfSelectedType(selectedType: string): void {
    if (!selectedType) {
      this.selectedDataItem = this.widgetDataHandled[0];
    }

    const filteredByTypeData: WidgetModel[] = this.widgetDataHandled.filter((item: WidgetModel) => {
      return item.type === selectedType;
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
    this.subscription = widgetData$
      .subscribe((data: WidgetModel[]) => {
        this.widgetDataHandled = data;
        this.selectedDataItem = this.widgetDataHandled[0];
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
