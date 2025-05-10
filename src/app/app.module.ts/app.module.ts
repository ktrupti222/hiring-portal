import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './app-material.module';
import { AppComponent } from '../app.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    RouterModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
