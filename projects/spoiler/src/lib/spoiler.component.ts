import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[spoiler]'
})
export class SpoilerDirective {
  @Input() textColor: string;
  defaultTextColor: string = '#d6d6d6';

  @Input() backgroundColor: string;
  defaultBackgroundColor: string = '#d6d6d6';

  @Input() hoverBackgroundColor: string;

  @Input() hoverTextColor: string;
  defaultHoverTextColor: string = 'black';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = this.backgroundColor || this.defaultBackgroundColor;
    this.el.nativeElement.style.color = this.textColor || this.defaultTextColor;
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.spoilerHighlightBackground(this.hoverBackgroundColor || null);
    this.spoilerHighlightText(this.hoverTextColor || this.defaultHoverTextColor);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.spoilerHighlightBackground(this.backgroundColor || this.defaultBackgroundColor);
    this.spoilerHighlightText(this.textColor || this.defaultTextColor);
  }

  private spoilerHighlightBackground(spoilerBackgroundColor: string): void {
    this.el.nativeElement.style.backgroundColor = spoilerBackgroundColor;
  }

  private spoilerHighlightText(spoilerTextColor: string): void {
    this.el.nativeElement.style.color = spoilerTextColor;
  }

}
