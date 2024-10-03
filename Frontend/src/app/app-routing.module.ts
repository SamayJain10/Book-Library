import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './utils/auth.gaurd'; 
import { UserListComponent } from './user/user-list/user-list.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { BooksComponent } from './book/books/books.component';

const routes: Routes = [
  { path: 'user-list', component: UserListComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  {
    path: 'books',
    loadChildren: () => import('./book/books/books.module').then(m => m.BooksModule),
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
