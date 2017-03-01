import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserviewComponent } from './create-userview.component';

describe('CreateUserviewComponent', () => {
  let component: CreateUserviewComponent;
  let fixture: ComponentFixture<CreateUserviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
