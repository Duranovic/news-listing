import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NewsEverythingStoreEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('news-everything', featureReducer),
    EffectsModule.forFeature([NewsEverythingStoreEffects])
  ],
  providers: [NewsEverythingStoreEffects]
})
export class NewsEverythingStoreModule {}