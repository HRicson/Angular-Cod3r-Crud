import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[red]'
})
export class RedDirective {

  constructor(private elementRef: ElementRef) { 
    elementRef.nativeElement.style.color = '#f12035';
  }

}
