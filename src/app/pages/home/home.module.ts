import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HeaderComponent } from '../../components/header/header.component';
import { WidgetComponent } from '../../components/widget/widget.component';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { EventComponent } from '../../components/event/event.component';
import { NoteComponent } from '../../components/note/note.component';
import { ReorderListComponent } from '../../components/reorder-list/reorder-list.component';
import { FormDialogComponent } from 'src/app/components/form-dialog/form-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    HeaderComponent,
    WidgetComponent,
    CalendarComponent,
    EventComponent,
    NoteComponent,
    ReorderListComponent,
    FormDialogComponent
  ]
})
export class HomePageModule {}
