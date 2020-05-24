import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryworkComponent } from './trywork.component';

describe('TryworkComponent', () => {
  let component: TryworkComponent;
  let fixture: ComponentFixture<TryworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
