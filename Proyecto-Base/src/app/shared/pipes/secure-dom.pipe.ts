import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'secureDom'
})
export class SecureDomPipe implements PipeTransform {

  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  transform(value: string, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    if (value) {
      switch (type) {
        case 'html': return this.domSanitizer.bypassSecurityTrustHtml(value);
        case 'style': return this.domSanitizer.bypassSecurityTrustStyle(value);
        case 'script': return this.domSanitizer.bypassSecurityTrustScript(value);
        case 'url': return this.domSanitizer.bypassSecurityTrustUrl(value);
        case 'resourceUrl': return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
        default: throw new Error(`Invalid safe type specified: ${type}`);
      }
    } else {
      return this.domSanitizer.bypassSecurityTrustHtml(value);
    }
  }

}
