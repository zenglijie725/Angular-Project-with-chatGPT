import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: 'login', component: HomeComponent },  
];

@NgModule({
  providers: [
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
