import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../app.module.ts/app-material.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, HeaderComponent],
  exports: [HeaderComponent],
})
export class SharedModule {}
