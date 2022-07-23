import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Faria', age: 24, job: 'Engineer' },
    {
      name: 'Qadeer',
      age: 35,
      job: 'Senior Developer',
    },
    {
      name: 'Iffu',
      age: 10,
      job: 'student',
    },
  ];
  header = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'age' },
    { key: 'job', label: 'job' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
