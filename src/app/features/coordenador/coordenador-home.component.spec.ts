import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadorHomeComponent } from './coordenador-home.component';

describe('CoordenadorHomeComponent', () => {
  let component: CoordenadorHomeComponent;
  let fixture: ComponentFixture<CoordenadorHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoordenadorHomeComponent]
    });
    fixture = TestBed.createComponent(CoordenadorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
