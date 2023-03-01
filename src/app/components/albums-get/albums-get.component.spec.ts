import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsGetComponent } from './albums-get.component';

describe('AlbumsGetComponent', () => {
  let component: AlbumsGetComponent;
  let fixture: ComponentFixture<AlbumsGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
