import { Pipe, PipeTransform } from '@angular/core';
import { WidgetModel } from '../../types';

@Pipe({
  name: 'activityFilter'
})
export class ActivityFilterPipe implements PipeTransform {

  public transform(activities: WidgetModel[], selectedType: string): WidgetModel[] {
    if (!selectedType) {
      return activities;
    }

    return activities.filter((item: WidgetModel) => {
      return item.type === selectedType;
    });
  }

}
