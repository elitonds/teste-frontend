import { AppListComponent } from './components/app-list/app-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenuModule} from 'primeng/menu';
import { NgModule } from '@angular/core';
import {SidebarModule} from 'primeng/sidebar';
import {SlideMenuModule} from 'primeng/slidemenu';
import {ButtonModule} from 'primeng/button';
import {PanelMenuModule} from 'primeng/panelmenu';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppNewComponent } from './components/app-new/app-new.component';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';

import {ReactiveFormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: 'list', component: AppListComponent },
  { path: 'new', component:  AppNewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AppNewComponent,
    AppListComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    SlideMenuModule,
    MenuModule,
    ButtonModule,
    PanelMenuModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
