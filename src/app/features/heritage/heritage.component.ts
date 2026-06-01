import { Component, inject } from '@angular/core';
import { GetQuoteService } from '../get-quote/get-quote-modal.service';

@Component({
  selector: 'app-heritage',
  templateUrl: './heritage.component.html',
  styleUrl: './heritage.component.scss',
})
export class HeritageComponent {
  readonly quoteService = inject(GetQuoteService);
}
