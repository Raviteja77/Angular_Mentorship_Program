import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggle]',
  exportAs: 'toggle',
})
export class ToggleDirective {

  constructor() { }

  isVisible: boolean = false;

  @HostListener('click')
  onClick() {
    const password = document.getElementById("password");
    const type = password !== null? password.getAttribute("type") === "password" ? "text" : "password": "";
    password !== null? password.setAttribute("type", type): "";
    this.isVisible = !this.isVisible;
  }

}
