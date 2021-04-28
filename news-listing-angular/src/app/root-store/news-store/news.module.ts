import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NewsStoreEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('news', featureReducer),
    EffectsModule.forFeature([NewsStoreEffects])
  ],
  providers: [NewsStoreEffects]
})
export class NewsStoreModule {}