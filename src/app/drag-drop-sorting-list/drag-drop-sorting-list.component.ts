import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop sorting
 */

@Component({
  selector: 'app-drag-drop-sorting-list',
  templateUrl: './drag-drop-sorting-list.component.html',
  styleUrls: ['./drag-drop-sorting-list.component.css']
})
export class DragDropSortingListComponent implements OnInit {

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  constructor() { }

  ngOnInit() {
  }

}

