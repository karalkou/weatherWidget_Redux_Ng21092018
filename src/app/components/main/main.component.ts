import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WidgetModel } from '../../types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor() {}

  @Input()
  public widgetData: WidgetModel[];

  @Output()
  public selectType: EventEmitter<string> = new EventEmitter();

  @Output()
  public selectId: EventEmitter<string> = new EventEmitter();

  public selectedType: string;
  public typeList: Array<{ type: string, name: string }>;

  /**
   * Gets selected type and emits it
   * @param e - event object
   */
  public getType(e: MouseEvent) {
    e.preventDefault();
    const target: HTMLElement = e.target as HTMLElement;

    this.selectedType = target.dataset.type;
    this.selectType.emit(this.selectedType);
  }

  /**
   * Emits selected activity id
   * @param id - selected item's id
   */
  public getId(id) {
    this.selectId.emit(id);

  }

  ngOnInit() {
    const typeListArr: string[] = [];

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
