import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryofcssComponent } from './historyofcss.component';

describe('HistoryofcssComponent', () => {
  let component: HistoryofcssComponent;
  let fixture: ComponentFixture<HistoryofcssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryofcssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryofcssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
