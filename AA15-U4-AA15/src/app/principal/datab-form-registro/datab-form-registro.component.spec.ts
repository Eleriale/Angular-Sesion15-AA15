import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabFormRegistroComponent } from './datab-form-registro.component';

describe('DatabFormRegistroComponent', () => {
  let component: DatabFormRegistroComponent;
  let fixture: ComponentFixture<DatabFormRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabFormRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabFormRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
