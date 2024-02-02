import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingLargeComponent } from './loading-large.component';

describe('LoadingLargeComponent', () => {
  let component: LoadingLargeComponent;
  let fixture: ComponentFixture<LoadingLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingLargeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
