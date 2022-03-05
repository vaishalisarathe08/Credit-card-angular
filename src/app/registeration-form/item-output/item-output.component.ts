import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.css']
})
export class ItemOutputComponent {
space =" ";
  @Output() newItemEvent = new EventEmitter<string>();
  @Input() name: string | undefined;

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
