import { Component, HostListener, ElementRef, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GetQuoteService } from '../../features/get-quote/get-quote-modal.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly quoteService = inject(GetQuoteService);
  readonly elRef = inject(ElementRef);
  mobileMenuOpen = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.mobileMenuOpen && !this.elRef.nativeElement.contains(event.target)) {
      this.mobileMenuOpen = false;
    }
  }

  selectedTab = 'products';

  toggleTab(tab: string) {
    this.selectedTab = tab;
  }
}
