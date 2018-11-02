import { Pipe, PipeTransform } from '@angular/core';
import { WidgetModel } from '../types';
import { IActivityType } from '../store/reducers/types.reducer';

@Pipe({
  name: 'activityFilter'
})
export class ActivityFilterPipe implements PipeTransform {

  public transform(activities: WidgetModel[], selectedType: IActivityType): WidgetModel[] {
    if (!selectedType) {
      return activities;
    }

    return activities.filter((item: WidgetModel) => {
      return item.type === selectedType.type;
    });
  }

}
