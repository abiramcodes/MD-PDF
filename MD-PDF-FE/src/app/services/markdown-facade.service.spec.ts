import { TestBed } from '@angular/core/testing';

import { MarkdownFacadeService } from './markdown-facade.service';

describe('MarkdownFacadeService', () => {
  let service: MarkdownFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkdownFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
