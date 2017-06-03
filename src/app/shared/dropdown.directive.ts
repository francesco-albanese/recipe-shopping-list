import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor() { }
  @HostBinding(`class.open`) isOpen: boolean = false;
  @HostListener(`click`) click(eventData: Event) {
    this.isOpen = !this.isOpen;
  }
}
