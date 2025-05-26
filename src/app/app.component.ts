import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFrameComponent } from "./shared/components/app-frame/app-frame.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppFrameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
