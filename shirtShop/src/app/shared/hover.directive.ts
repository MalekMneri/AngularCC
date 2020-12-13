import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[hoverDirective]'
})
export class HoverDirective {

  constructor(private el: ElementRef) {
    }
  @HostListener('mouseenter') onMouseEnter() {
  this.highlight('grey');
  }

  @HostListener('mouseleave') onMouseLeave() {
  this.highlight('#efef43');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
