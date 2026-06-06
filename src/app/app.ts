import { Component, isDevMode } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeSwitcherComponent } from './core/components/theme-switcher/theme-switcher.component';
import { GetQuoteModalComponent } from './features/get-quote/get-quote-modal.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

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
