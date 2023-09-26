import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '',  component: HomeComponent},
  {path: 'home',component:HomeComponent},
  {path: 'project',component:ProjectComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'about',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
