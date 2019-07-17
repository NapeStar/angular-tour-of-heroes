import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropSortingListComponent } from './drag-drop-sorting-list.component';

describe('DragDropSortingListComponent', () => {
  let component: DragDropSortingListComponent;
  let fixture: ComponentFixture<DragDropSortingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropSortingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropSortingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
