import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagSuggestPanel } from './flag-suggest-panel';

describe('FlagSuggestPanel', () => {
  let component: FlagSuggestPanel;
  let fixture: ComponentFixture<FlagSuggestPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagSuggestPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagSuggestPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
