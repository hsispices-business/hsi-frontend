import { Component, computed, signal } from '@angular/core';

const THEMES = [
  { id: 'spice', label: 'Fiery Spice',   swatches: ['#C40C0C', '#FF6500', '#CC561E', '#F6CE71'] },
  { id: 'cream', label: 'Burgundy Gold', swatches: ['#7C2D3E', '#B8973A', '#E8CC8A', '#FDF8F0'] },
  { id: 'herb',  label: 'Herbal Green',  swatches: ['#6CA651', '#BBCB2E', '#839705', '#6B7445'] },
  { id: 'pearl', label: 'Pearl Blue',    swatches: ['#2563EB', '#0EA5E9', '#1E3A8A', '#F0F6FF'] },
  { id: 'vivid',     label: 'Vivid',           swatches: ['#C00707', '#FF4400', '#FFB33F', '#134E8E'] },
  { id: 'sunrise',   label: 'Saffron Sunrise',  swatches: ['#B45309', '#D97706', '#8B4E1A', '#FBE888'] },
  { id: 'rose',      label: 'Rose Petal',       swatches: ['#BE185D', '#EC4899', '#7C2D42', '#FFC0D5'] },
  { id: 'peacock',   label: 'Peacock Teal',     swatches: ['#0F766E', '#14B8A6', '#042F2E', '#F7D34C'] },
  { id: 'royal',     label: 'Royal Indigo',     swatches: ['#4338CA', '#818CF8', '#1E1B4B', '#F7CC38'] },
  { id: 'cinnamon',  label: 'Cinnamon Bark',    swatches: ['#7C4A1E', '#A0522D', '#2E1C0A', '#F5D4A0'] },
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

  constructor() {
    // Apply default theme on load
    this.applyTheme('herb');
  }

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
