import { NgModule, CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './user/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { PopularBooksComponent } from './book/popular-books/popular-books.component';
import { AuthService } from './services/auth.service'; 
import { RouterModule } from '@angular/router';
import { ChartsComponent } from './dashboard/charts/charts.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { BookGridComponent } from './book/book-grid/book-grid.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    UserDetailsComponent,
    AdminDashboardComponent,
    PopularBooksComponent,
    ChartsComponent,
    BookGridComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HighchartsChartModule,
    AgGridModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
