import { TestBed, inject } from '@angular/core/testing';

import { DataBearerService } from './data-bearer.service';

describe('DataBearerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataBearerService]
    });
  });

  it('should be created', inject([DataBearerService], (service: DataBearerService) => {
    expect(service).toBeTruthy();
  }));
});
