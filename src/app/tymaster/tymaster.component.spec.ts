import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TymasterComponent } from './tymaster.component';

describe('TymasterComponent', () => {
  let component: TymasterComponent;
  let fixture: ComponentFixture<TymasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TymasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TymasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
