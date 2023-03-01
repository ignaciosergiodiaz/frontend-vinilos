import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongGetComponent } from './song-get.component';

describe('SongGetComponent', () => {
  let component: SongGetComponent;
  let fixture: ComponentFixture<SongGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
