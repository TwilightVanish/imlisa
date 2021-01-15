import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EntryComponent} from './entry/entry.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  { path: '', component: EntryComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
