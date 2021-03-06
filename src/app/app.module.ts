import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { FormsModule } from '@angular/forms';
import { DemoService } from './demo.service'; 
import { RouterModule, Routes } from '@angular/router';  // our custom service, see below
 
import { AppComponent }  from './app.component';
import { LinkComponent } from './link/link.component';

 import { userRoutingModule } from './user-routing.module';


 
@NgModule({

    imports: [BrowserModule, FormsModule, HttpClientModule, userRoutingModule],
    declarations: [AppComponent, LinkComponent],
    providers: [DemoService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
        })
export class AppModule { }


