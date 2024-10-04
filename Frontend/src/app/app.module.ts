import { NgModule, CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { PopularBooksComponent } from './dashboard/popular-books/popular-books.component';
import { AuthService } from './services/auth.service'; 
import { RouterModule } from '@angular/router';
import { ChartsComponent } from './dashboard/charts/charts.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { BookGridComponent } from './dashboard/book-grid/book-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,
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
    AgGridModule,
    UserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
