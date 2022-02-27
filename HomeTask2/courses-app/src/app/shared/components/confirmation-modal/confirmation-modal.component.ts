import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {

  @Input()
  title!: string;

  @Input()
  okButtonText!: string;

  @Input()
  cancelButtonText!: string;

  @Output()
  emitButtonClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler(): void {
    this.emitButtonClick.emit(true);
    document.getElementById("close")?.click();
  }

}
