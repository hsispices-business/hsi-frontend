import { Component, HostListener, ElementRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  mobileMenuOpen = false;

  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.mobileMenuOpen && !this.elRef.nativeElement.contains(event.target)) {
      this.mobileMenuOpen = false;
    }
  }

  selectedTab: string = 'products';

  toggleTab(tab: string) {
    this.selectedTab = tab;
  }
}
