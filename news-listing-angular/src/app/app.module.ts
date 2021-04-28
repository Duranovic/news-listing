import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './core/config/config.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NewsModule } from './news/news.module';
import { MaterialModule } from './material/material.module';
import { RootStoreModule } from './root-store';
import { DataService } from './core/services';


export function configServiceFactory(config: ConfigService): unknown {
	return (): unknown => config.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RootStoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NewsModule,
    MaterialModule
  ],
  providers: [
    DataService,
		ConfigService, 
    {
			provide: APP_INITIALIZER,
			useFactory: configServiceFactory,
			deps: [ConfigService],
			multi: true
		}
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
