import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertcodeComponent } from './convertcode.component';

describe('ConvertcodeComponent', () => {
  let component: ConvertcodeComponent;
  let fixture: ComponentFixture<ConvertcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertcodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConvertcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
