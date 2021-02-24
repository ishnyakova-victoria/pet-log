import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogComponent implements OnInit {
  @Input() type: 'event' | 'note' = 'event';

  public currentDate: string = new Date().toISOString();

  constructor() { }

  ngOnInit() {}
  
}
