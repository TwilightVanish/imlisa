import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EntryComponent} from './entry/entry.component';
import {ErrorComponent} from './error/error.component';
import {PortfolioComponent} from './portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: EntryComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
