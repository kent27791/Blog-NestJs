import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { AdminModule } from '../admin/admin.module';
import { LayoutComponent } from './layout.component';
import { MainModule } from '../main/main.module';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => AuthModule
      },
      {
        path: 'admin',
        loadChildren: () => AdminModule
      },
      {
        path: 'main',
        loadChildren: () => MainModule
      },
      {
        path: '**',
        redirectTo: 'main/home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
