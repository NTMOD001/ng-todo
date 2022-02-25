import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterTodoComponent } from './better-todo.component';

describe('BetterTodoComponent', () => {
  let component: BetterTodoComponent;
  let fixture: ComponentFixture<BetterTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetterTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetterTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
