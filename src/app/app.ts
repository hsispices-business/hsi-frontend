import { Component, isDevMode } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeSwitcherComponent } from './core/components/theme-switcher/theme-switcher.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { GetQuoteModalComponent } from './features/get-quote/get-quote-modal.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ThemeSwitcherComponent,
    HeaderComponent,
    FooterComponent,
    GetQuoteModalComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly isDev = isDevMode();
}
