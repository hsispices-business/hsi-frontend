import { Component, computed, signal } from '@angular/core';

const THEMES = [
  { id: 'spice', label: 'Fiery Spice',   swatches: ['#C40C0C', '#FF6500', '#CC561E', '#F6CE71'] },
  { id: 'blue',  label: 'Steel Blue',    swatches: ['#CE2626', '#7DAACB', '#E8DBB3', '#FFFDEB'] },
  { id: 'cream', label: 'Burgundy Gold', swatches: ['#7C2D3E', '#B8973A', '#E8CC8A', '#FDF8F0'] },
  { id: 'herb',  label: 'Herbal Green',  swatches: ['#6CA651', '#BBCB2E', '#839705', '#6B7445'] },
  { id: 'pearl', label: 'Pearl Blue',    swatches: ['#2563EB', '#0EA5E9', '#1E3A8A', '#F0F6FF'] },
] as const;

type ThemeId = (typeof THEMES)[number]['id'];

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  templateUrl: './theme-switcher.component.html',
})
export class ThemeSwitcherComponent {
  readonly themes = THEMES;
  readonly open = signal(false);
  readonly activeThemeId = signal<ThemeId>('spice');

  readonly currentTheme = computed(
    () => this.themes.find(t => t.id === this.activeThemeId())!,
  );

  toggle(): void {
    this.open.update(v => !v);
  }

  applyTheme(id: ThemeId): void {
    this.activeThemeId.set(id);
    if (id === 'spice') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', id);
    }
    this.open.set(false);
  }
}
