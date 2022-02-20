import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() buttonText: string = '';
  @Input() buttonClass: string = 'btn btn-outline-primary';
  @Input() iconName: any = '';
  @Input() buttonType: string = 'button';

  @Output()
  emitButtonClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler(): void {
    this.emitButtonClick.emit(true);
  }

}
