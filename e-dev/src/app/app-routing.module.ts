import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path: 'login',
  loadChildren: () =>
    import('./pages/login/login.module').then(m => m.LoginPageModule)
},
{
  path: 'register',
  loadChildren: () =>
    import('./pages/register/register.module').then(m => m.RegisterPageModule)
},
{
  path: 'tabs',
  loadChildren: () =>
    import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
},
{
  path: 'lecture-video',
  loadChildren: () => import('./modals/lecture-video/lecture-video.module').then(m => m.LectureVideoPageModule)
},
{
  path: 'upload-video',
  loadChildren: () => import('./pages/upload-video/upload-video.module').then(m => m.UploadVideoPageModule)
}


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }