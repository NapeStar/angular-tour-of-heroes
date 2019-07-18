import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropConnectedSortingComponent } from './drag-drop-connected-sorting.component';

describe('DragDropConnectedSortingComponent', () => {
  let component: DragDropConnectedSortingComponent;
  let fixture: ComponentFixture<DragDropConnectedSortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropConnectedSortingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropConnectedSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
