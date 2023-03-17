import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbanerComponent } from './sbaner.component';

describe('SbanerComponent', () => {
  let component: SbanerComponent;
  let fixture: ComponentFixture<SbanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbanerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
