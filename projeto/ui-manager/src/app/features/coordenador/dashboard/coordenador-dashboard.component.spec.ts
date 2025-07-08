import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadorDashboardComponent } from './coordenador-dashboard.component';

describe('CoordenadorDashboardComponent', () => {
  let component: CoordenadorDashboardComponent;
  let fixture: ComponentFixture<CoordenadorDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoordenadorDashboardComponent]
    });
    fixture = TestBed.createComponent(CoordenadorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
