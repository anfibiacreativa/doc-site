import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'docs', loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule) }, {
  path: '', redirectTo: 'docs/scully-docs-homepage', pathMatch: 'full'},
  { path: 'temporary', loadChildren: () => import('./temporary/temporary.module').then(m => m.TemporaryModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
