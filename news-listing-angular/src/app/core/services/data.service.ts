import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfig } from 'src/app/app-config';
import { News, NewsResult } from '../models';
import { BaseApiService } from './api/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API_BASE_URL = 'https://newsapi.org/v2';
  private API_KEY = "08823e1ce681449a8f67c7b0bb890484";
  // private readonly API_BASE_URL;
  // private readonly API_APIKEY;
  private pageTopHeadlines = 0;

  constructor(readonly http: HttpClient, readonly appConfig: AppConfig) {
    // this.API_BASE_URL = appConfig.appSettings.apiEndpoints.newsapi.url;
    // this.API_APIKEY = appConfig.appSettings.apiEndpoints.newsapi.apiKey;
  }

  getTopHeadlines(): Observable<News[]> {
    return this.http
      .get<NewsResult>(
      `${this.API_BASE_URL}/top-headlines?country=us&page=${++this.pageTopHeadlines}&apiKey=${this.API_KEY}`
      )
      .pipe(map(result => result.articles));
  }

  getEverything(searchKey: string, sortBy: string): Observable<News[]> {
    return this.http
      .get<NewsResult>(
      `${this.API_BASE_URL}/everything?q=${searchKey}&sortBy=${sortBy}&apiKey=${this.API_KEY}`
      )
      .pipe(map(result => result.articles));
  }
}