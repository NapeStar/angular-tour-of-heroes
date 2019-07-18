import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
/**
 * @title Drag&Drop connected sorting
 */


@Component({
  selector: 'app-drag-drop-connected-sorting',
  templateUrl: './drag-drop-connected-sorting.component.html',
  styleUrls: ['./drag-drop-connected-sorting.component.css']
})
export class DragDropConnectedSortingComponent implements OnInit {

  constructor() { }

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}

