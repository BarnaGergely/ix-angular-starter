import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFrameComponent } from "./shared/components/app-frame/app-frame.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppFrameComponent],
  template: `
    <app-app-frame>
      <router-outlet></router-outlet>
    </app-app-frame>
    `,
})
export class AppComponent { }
