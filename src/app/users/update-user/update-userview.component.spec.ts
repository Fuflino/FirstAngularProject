import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserviewComponent } from './update-userview.component';

describe('UpdateUserviewComponent', () => {
  let component: UpdateUserviewComponent;
  let fixture: ComponentFixture<UpdateUserviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
