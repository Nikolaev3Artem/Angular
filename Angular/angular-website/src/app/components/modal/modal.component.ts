import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{
  
  @Input() title: string

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
