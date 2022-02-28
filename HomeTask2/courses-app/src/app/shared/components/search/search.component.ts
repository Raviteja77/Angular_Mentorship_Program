import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {buttonText} from '../../constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  inputPlaceholder: string = '';

  @Output()
  emitEvent: EventEmitter<String> = new EventEmitter<String>();

  buttonText = buttonText;

  searchKeyword: string = '';

  saveSearchWord(event: any): void {
    this.searchKeyword = event.target.value;
  }

  clickHandler(event: any): void {
    this.emitEvent.emit(this.searchKeyword);
  }

}
