import {TestBed} from '@angular/core/testing';

import {ConsultsResolver} from './consults.resolver';

describe('ConsultsResolverResolver', () => {
  let resolver: ConsultsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ConsultsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
