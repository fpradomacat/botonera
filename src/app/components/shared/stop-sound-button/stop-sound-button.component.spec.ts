import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopSoundButtonComponent } from './stop-sound-button.component';

describe('StopSoundButtonComponent', () => {
  let component: StopSoundButtonComponent;
  let fixture: ComponentFixture<StopSoundButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopSoundButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopSoundButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
