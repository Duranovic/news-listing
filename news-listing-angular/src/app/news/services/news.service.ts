import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  searchKey: string
  sortBy: string;
  constructor() {
    this.searchKey = '';
    this.sortBy = 'publishedAt'
  }
}
