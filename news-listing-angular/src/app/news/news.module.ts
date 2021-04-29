import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListingComponent } from './news-listing/news-listing.component';
import { NewsRoutingModule } from './news-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { NewsGridComponent } from './news-listing/news-grid/news-grid.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    NewsListingComponent,
    NewsGridComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
