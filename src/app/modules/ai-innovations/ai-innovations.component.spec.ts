import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiInnovationsComponent } from './ai-innovations.component';

describe('AiInnovationsComponent', () => {
  let component: AiInnovationsComponent;
  let fixture: ComponentFixture<AiInnovationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiInnovationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiInnovationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
