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
  private API_KEY = "2e3f98616d14426d8ef0847f928a59e2";
  // private readonly API_BASE_URL;
  // private readonly API_APIKEY;
  private page = 0;

  constructor(readonly http: HttpClient, readonly appConfig: AppConfig) {
    // this.API_BASE_URL = appConfig.appSettings.apiEndpoints.newsapi.url;
    // this.API_APIKEY = appConfig.appSettings.apiEndpoints.newsapi.apiKey;
  }

  getNews(): Observable<News[]> {
    return this.http
      .get<NewsResult>(
      `${this.API_BASE_URL}/top-headlines?country=us&page=${++this.page}&apiKey=${this.API_KEY}`
      )
      .pipe(map(result => result.articles));
  }
}