import {SecureDomPipe} from './secure-dom.pipe';
import {async, TestBed} from '@angular/core/testing';
import {DomSanitizer} from '@angular/platform-browser';

beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [SecureDomPipe],
    providers: [
      SecureDomPipe,
      {
        provide: DomSanitizer, useValue: {
          bypassSecurityTrustResourceUrl() {
          }
        },
      }
    ]
  });
}));

describe('SecureDomPipe', () => {
  it('create an instance', () => {
    const pipe = TestBed.get(SecureDomPipe);
    expect(pipe).toBeTruthy();
  });
});
