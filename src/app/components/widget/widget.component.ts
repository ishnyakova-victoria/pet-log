import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

type Colors = "pink" | "blue" | "yellow";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements OnInit {
  @Input() title: string = '';
  @Input() color: Colors = 'pink';

  @Output() create = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  public onCreate(): void {
    this.create.emit();
  }
}
