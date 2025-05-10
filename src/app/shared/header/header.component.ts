import { Component } from '@angular/core';
import { MaterialModule } from '../../app.module.ts/app-material.module';
import { SharedModule } from '../shared.module';

@Component({
  selector: 'app-header',
  imports: [MaterialModule, SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
