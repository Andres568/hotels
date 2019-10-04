import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WensternsWeddingsComponent } from './wensterns-weddings.component';

describe('WensternsWeddingsComponent', () => {
  let component: WensternsWeddingsComponent;
  let fixture: ComponentFixture<WensternsWeddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WensternsWeddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WensternsWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
