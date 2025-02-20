import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuggingFaceComponent } from './hugging-face.component';

describe('HuggingFaceComponent', () => {
  let component: HuggingFaceComponent;
  let fixture: ComponentFixture<HuggingFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HuggingFaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HuggingFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
