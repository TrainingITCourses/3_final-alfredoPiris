import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePresenterComponent } from './home-presenter.component';

describe('HomePresenterComponent', () => {
  let component: HomePresenterComponent;
  let fixture: ComponentFixture<HomePresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
