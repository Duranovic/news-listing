import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/app-config';
import { News } from '../../models/news';
import { BaseApiService } from './base-api.service';


@Injectable({
  providedIn: 'root'
})
export class NewsApiGetTopHeadlinesService extends BaseApiService {
  constructor(readonly http: HttpClient, readonly appConfig: AppConfig) {
    super(http, appConfig);
  }

  get baseUrl(): string {
    console.log(this.appConfig.appSettings);
    return this.apiKey;
    // return `${this.appConfig.appSettings.apiEndpoints.newsapi.url}/${this.appConfig.appSettings.apiEndpoints.newsapi.version}/top-headlines`;
  }

  get apiKey(): string {
    return `${this.appConfig.appSettings.apiEndpoints.newsapi.apiKey}`;
  }

getTopHeadlines(): Observable<News[]> {
    return this.get<News[]>(`${this.baseUrl}?apiKey=${this.apiKey}`);
}

// createCulture(culture: Culture): Observable<ApiResponse<string> | ApiErrorResponse> {
//     return this.post<ApiResponse<string> | ApiErrorResponse>(`${this.baseUrl}`, culture);
// }

// deleteCulture(cultureId: string): Observable<ApiResponse<void> | ApiErrorResponse> {
//     return this.delete<ApiResponse<void> | ApiErrorResponse>(`${this.baseUrl}/${cultureId}`);
// }

// updateCulture(culture: Culture): Observable<ApiResponse<void> | ApiErrorResponse> {
//     return this.put<ApiResponse<void> | ApiErrorResponse>(`${this.baseUrl}`, culture);
// }

// getById(cultureId: string): Observable<ApiResponse<Culture> | ApiErrorResponse> {
//     return this.get<ApiResponse<Culture> | ApiErrorResponse>(`${this.baseUrl}/${cultureId}`);
// }
}
