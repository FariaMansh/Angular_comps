import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {
      title: 'Why is the sky blue?',
      content: 'The sky is blue, because it is',
    },
    {
      title: 'what does an orange taste like?',
      content: 'Like an Orange',
    },
    {
      title: 'what color is that cat?',
      content: 'Cat is black in color',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
