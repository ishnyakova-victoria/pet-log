import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
import { HeaderComponent } from '../../components/header/header.component';
import { WidgetComponent } from '../../components/widget/widget.component';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { ReorderListComponent } from '../../components/reorder-list/reorder-list.component';
import { EventComponent } from '../../components/event/event.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule
  ],
  declarations: [
    EventsPage,
    HeaderComponent,
    WidgetComponent,
    CalendarComponent,
    ReorderListComponent,
    EventComponent
  ]
})
export class EventsPageModule {}
