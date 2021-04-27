import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: 'news',
		data: { title: 'News' },
		loadChildren: () => import('./news/news.module').then((mod) => mod.NewsModule)
  },
  { path: '', component: HeaderComponent, outlet: 'header' },
  { path: '', redirectTo: 'news', pathMatch: 'full' },
  { path: '**', redirectTo: 'news', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
