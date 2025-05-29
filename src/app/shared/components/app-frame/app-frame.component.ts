import { Component } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { IxApplication, IxApplicationHeader, IxAvatar, IxContent, IxDropdownButton, IxDropdownItem, IxIconButton, IxMenu, IxMenuCategory, IxMenuItem } from '@siemens/ix-angular/standalone';
import { IxMenuAbout, IxMenuAboutItem } from '@siemens/ix-angular/standalone';
import { AboutComponent } from "./about/about.component";
import { themeSwitcher } from '@siemens/ix';

@Component({
  selector: 'app-app-frame',
  imports: [IxApplication, IxApplicationHeader, IxMenu, IxMenuItem, IxContent, AboutComponent, IxDropdownButton, IxDropdownItem, IxAvatar, IxMenuCategory, IxIconButton, IxMenuAbout, IxMenuAboutItem],
  templateUrl: './app-frame.component.html',
  styleUrl: './app-frame.component.scss'
})
export class AppFrameComponent implements AfterViewInit {
  @ViewChild('menu', { read: ElementRef })
  menuRef!: ElementRef<HTMLIxMenuElement>;
  themes = ["theme-brand-dark", 'theme-classic-light', 'theme-classic-dark', "theme-brand-light"];
  selectedTheme = this.themes[1];
  themeIcon: string = 'sun';

  constructor() { }

  onValueChange(event: Event) {
    const customEvent = event as CustomEvent<string>;
    const newTheme = customEvent.detail;
    themeSwitcher.setTheme(newTheme);
    this.selectedTheme = newTheme;
  }

  toggleMode() {
    themeSwitcher.toggleMode();
  }

  onSystemMode({ target }: Event) {
    if ((target as HTMLInputElement).checked) {
      themeSwitcher.setVariant();
      return;
    }

    themeSwitcher.setTheme(this.selectedTheme);
  }

  ngAfterViewInit() {
    const { nativeElement } = this.menuRef;
    nativeElement.toggleAbout(false);
  }
}
