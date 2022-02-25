import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetterTodoComponent } from './better-todo/better-todo.component';
import { HomeComponent } from './home/home.component';
import { SimpleTodoComponent } from './simple-todo/simple-todo.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'simple', component: SimpleTodoComponent },
  { path: 'better', component: BetterTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
