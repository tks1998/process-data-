import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: ItemListComponent},
  { path: ':id', component: DetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    DetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}