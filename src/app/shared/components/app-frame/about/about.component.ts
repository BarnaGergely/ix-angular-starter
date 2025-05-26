import { Component } from '@angular/core';
import { IxMenuAbout, IxMenuAboutItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-about',
  imports: [IxMenuAbout, IxMenuAboutItem],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
