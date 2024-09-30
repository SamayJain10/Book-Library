import { NgModule, CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './core/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UserListComponent } from './core/user-list/user-list.component';
import { UserDetailsComponent } from './core/user-details/user-details.component';
import { AdminDashboardComponent } from './core/admin-dashboard/admin-dashboard.component';
import { PopularBooksComponent } from './core/popular-books/popular-books.component';
import { AuthService } from './services/auth.service'; 
import { RouterModule } from '@angular/router';
import { ChartsComponent } from './core/charts/charts.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { BookGridComponent } from './core/book-grid/book-grid.component';
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
