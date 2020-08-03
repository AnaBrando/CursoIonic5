import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'navegacao',
    loadChildren: () => import('./navegacao/navegacao.module').then( m => m.NavegacaoPageModule)
  },
  {
    path: 'botoes',
    loadChildren: () => import('./botoes/botoes.module').then( m => m.BotoesPageModule)
  },
  {
    path: 'apis',
    loadChildren: () => import('./apis/apis.module').then( m => m.ApisPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
