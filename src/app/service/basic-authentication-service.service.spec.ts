import { TestBed } from '@angular/core/testing';

import { BasicAuthenticationServiceService } from './basic-authentication-service.service';

describe('BasicAuthenticationServiceService', () => {
  let service: BasicAuthenticationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAuthenticationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
