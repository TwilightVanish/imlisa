import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EntryComponent} from './entry/entry.component';
import {ErrorComponent} from './error/error.component';
import {LewdComponent} from './lewd/lewd.component';

const routes: Routes = [
  { path: '', component: EntryComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'lewd', component: LewdComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
