import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
   {
     path: '',
     children: [
       { path: 'home', component: HomeComponent },
       { path: 'article/:id', component: ArticleComponent },
       { path: '**', redirectTo: 'home' }
     ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
