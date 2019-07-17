import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component'; // <-- NgModel lives here
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropExampleComponent } from './drag-drop-example/drag-drop-example.component';
import { DragDropSortingListComponent } from './drag-drop-sorting-list/drag-drop-sorting-list.component';
import { DragDropConnectedSortingComponent } from './drag-drop-connected-sorting/drag-drop-connected-sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DragDropExampleComponent,
    DragDropSortingListComponent,
    DragDropConnectedSortingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
