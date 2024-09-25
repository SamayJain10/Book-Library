import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/core/login/login.component';
import { AuthGuard } from './auth.gaurd'; 
import { UserListComponent } from './core/user-list/user-list.component';
import { AdminDashboardComponent } from './core/admin-dashboard/admin-dashboard.component';
import { BooksComponent } from './core/books/books.component';

const routes: Routes = [
  { path: 'user-list', component: UserListComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksComponent }, 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'books',
    loadChildren: () => import('./core/books/books.module').then(m => m.BooksModule),
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
