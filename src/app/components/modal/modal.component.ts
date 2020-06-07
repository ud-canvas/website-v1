import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() width = '40%';
  @Output() modalClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickModal(event: Event) {
    event.stopPropagation();
  }

  onModalBackgroundClick() {
    this.modalClose.emit();
  }

}
