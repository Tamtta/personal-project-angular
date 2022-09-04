import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[scaleAnim]',
})
export class AnimDirective {
  constructor(private ref: ElementRef) {}

  @HostListener('mouseenter')
  startAnimation() {
    this.ref.nativeElement.classList.add('showAnimation');
  }

  @HostListener('mouseleave')
  resetAnimation() {
    this.ref.nativeElement.classList.remove('showAnimation');
  }
}
