import { TestBed } from '@angular/core/testing';

import { Essay } from './essay';

describe('Essay', () => {
  let service: Essay;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Essay);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
