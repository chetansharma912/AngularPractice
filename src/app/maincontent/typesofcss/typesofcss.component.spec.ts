import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesofcssComponent } from './typesofcss.component';

describe('TypesofcssComponent', () => {
  let component: TypesofcssComponent;
  let fixture: ComponentFixture<TypesofcssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypesofcssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypesofcssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
