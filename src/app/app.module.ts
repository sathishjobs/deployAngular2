import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routing";
import { ImageUploadModule } from 'ng2-imageupload';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ImageUploadModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
