import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumGetComponent } from './album-get.component';

describe('AlbumGetComponent', () => {
  let component: AlbumGetComponent;
  let fixture: ComponentFixture<AlbumGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
