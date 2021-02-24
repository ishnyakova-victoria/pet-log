import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-reorder-list',
  templateUrl: './reorder-list.component.html',
  styleUrls: ['./reorder-list.component.scss'],
})
export class ReorderListComponent implements OnInit {
  @ContentChild('reorderItem') reorderItem: TemplateRef<any>; 
  
  @Input() color: 'pink' | 'blue' | 'yellow' = 'pink';

  constructor() { }

  ngOnInit() {}

  public doReorder(event: CustomEvent<ItemReorderEventDetail>): void {
    event.detail.complete();
  }
}
