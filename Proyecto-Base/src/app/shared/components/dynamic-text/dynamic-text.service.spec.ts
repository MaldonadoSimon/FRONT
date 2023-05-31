import { TestBed } from '@angular/core/testing';

import { DynamicTextService } from './dynamic-text.service';

describe('BackOfficeService', () => {
  let service: DynamicTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
