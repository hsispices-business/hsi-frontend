import { Component, HostListener, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetQuoteService } from './get-quote-modal.service';

@Component({
  selector: 'app-get-quote-modal',
  imports: [FormsModule],
  templateUrl: './get-quote-modal.component.html',
  styleUrl: './get-quote-modal.component.scss',
})
export class GetQuoteModalComponent {
  readonly quoteService = inject(GetQuoteService);

  fullName = '';
  email = '';
  phone = '';
  quantity = '';
  requirements = '';

  readonly selectedSpices = signal(new Set<string>());

  readonly spiceOptions = [
    'Turmeric Powder',
    'Black Pepper',
    'Green Cardamom',
    'Cumin Seeds',
    'Red Chili',
    'Cinnamon Quills',
  ];

  @HostListener('document:keydown.escape')
  onEsc(): void {
    if (this.quoteService.isOpen()) this.quoteService.close();
  }

  toggleSpice(spice: string): void {
    this.selectedSpices.update((set) => {
      const next = new Set(set);
      if (next.has(spice)) {
        next.delete(spice);
      } else {
        next.add(spice);
      }
      return next;
    });
  }

  isSpiceSelected(spice: string): boolean {
    return this.selectedSpices().has(spice);
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    // TODO: wire to backend API
    this.quoteService.close();
  }
}
