import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-grid',
  templateUrl: './news-grid.component.html',
  styleUrls: ['./news-grid.component.scss']
})
export class NewsGridComponent implements OnInit {
  @Input() containFilter: boolean = false;
  fakeArray: string[] = new Array(12);
  sortBy: string = "publishedAt";
  constructor() { }

  ngOnInit(): void {
  }

}
