import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidsTableComponent } from './asteroids-table.component';

describe('AsteroidsTableComponent', () => {
  let component: AsteroidsTableComponent;
  let fixture: ComponentFixture<AsteroidsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsteroidsTableComponent]
    });
    fixture = TestBed.createComponent(AsteroidsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
