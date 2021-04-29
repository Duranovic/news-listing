import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NewsEverythingStoreModule } from './news-everything-store';

import { NewsStoreModule } from './news-store';

@NgModule({
  imports: [
    CommonModule,
    NewsStoreModule,
    NewsEverythingStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  declarations: []
})
export class RootStoreModule {}