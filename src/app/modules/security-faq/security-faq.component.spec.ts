import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityFaqComponent } from './security-faq.component';

describe('SecurityFaqComponent', () => {
  let component: SecurityFaqComponent;
  let fixture: ComponentFixture<SecurityFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityFaqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecurityFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
