import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor(private elementRef: ElementRef) {}

  @HostBinding('class.open') isOpen: boolean = false;

  // @HostListener('click') toggleOpen(e: Event) {
  //   this.isOpen = !this.isOpen;
  // }

  @HostListener('document:click', ['$event']) dropdownClose(e: Event) {
    this.isOpen = this.elementRef.nativeElement.contains(e.target)
      ? !this.isOpen
      : false;
  }
}
