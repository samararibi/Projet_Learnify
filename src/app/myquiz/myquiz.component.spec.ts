import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyquizComponent } from './myquiz.component';

describe('MyquizComponent', () => {
  let component: MyquizComponent;
  let fixture: ComponentFixture<MyquizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyquizComponent]
    });
    fixture = TestBed.createComponent(MyquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
