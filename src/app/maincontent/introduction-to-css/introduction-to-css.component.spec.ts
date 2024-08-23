import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionToCssComponent } from './introduction-to-css.component';

describe('IntroductionToCssComponent', () => {
  let component: IntroductionToCssComponent;
  let fixture: ComponentFixture<IntroductionToCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionToCssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroductionToCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
