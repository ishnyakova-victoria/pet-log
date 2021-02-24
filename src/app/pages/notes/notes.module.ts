import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotesPageRoutingModule } from './notes-routing.module';

import { NotesPage } from './notes.page';
import { HeaderComponent } from '../../components/header/header.component';
import { ReorderListComponent } from '../../components/reorder-list/reorder-list.component';
import { NoteComponent } from '../../components/note/note.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotesPageRoutingModule
  ],
  declarations: [
    NotesPage,
    HeaderComponent,
    ReorderListComponent,
    NoteComponent
  ]
})
export class NotesPageModule {}
