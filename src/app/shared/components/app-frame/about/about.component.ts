import { Component } from '@angular/core';
import { IxMenuAboutItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-about',
  imports: [IxMenuAboutItem],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  
}
