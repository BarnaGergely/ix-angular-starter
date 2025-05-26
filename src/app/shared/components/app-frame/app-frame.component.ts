import { Component } from '@angular/core';
import {IxApplication, IxApplicationHeader, IxContent, IxMenu, IxMenuItem} from '@siemens/ix-angular/standalone';
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-app-frame',
  imports: [IxApplication, IxApplicationHeader, IxMenu, IxMenuItem, IxContent, AboutComponent],
  templateUrl: './app-frame.component.html',
  styleUrl: './app-frame.component.scss'
})
export class AppFrameComponent {

}
