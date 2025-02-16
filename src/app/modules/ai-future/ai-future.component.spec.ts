import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiFutureComponent } from './ai-future.component';

describe('AiFutureComponent', () => {
  let component: AiFutureComponent;
  let fixture: ComponentFixture<AiFutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiFutureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
