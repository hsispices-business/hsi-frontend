import { Component, inject, signal } from '@angular/core';
import { GetQuoteService } from '../get-quote/get-quote-modal.service';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqSection {
  id: string;
  icon: string;
  title: string;
  accentHex: string;
  items: FaqItem[];
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  readonly quoteService = inject(GetQuoteService);
  readonly openItems = signal(new Set<string>());

  readonly sections: FaqSection[] = [
    {
      id: 'quality',
      icon: 'verified',
      title: 'Product Quality',
      accentHex: '#5c040a',
      items: [
        {
          id: 'q1',
          question: 'How do you ensure the purity of your ground spices?',
          answer:
            'We employ a multi-stage cleaning process and cryogenic grinding technology to preserve essential oils. Each batch undergoes rigorous laboratory testing for adulteration, moisture content, and microbial counts.',
        },
        {
          id: 'q2',
          question: 'Are your spices 100% natural and preservative-free?',
          answer:
            'Yes, Him Spices Industries prides itself on offering 100% pure products. We do not use artificial colors, fillers, or synthetic preservatives in any of our blends or single-origin powders.',
        },
      ],
    },
    {
      id: 'bulk',
      icon: 'inventory_2',
      title: 'Bulk Ordering',
      accentHex: '#7e570b',
      items: [
        {
          id: 'q3',
          question: 'What is the minimum order quantity (MOQ) for B2B clients?',
          answer:
            'MOQs vary depending on the product line. Generally, for bulk industrial ground spices, our MOQ starts at 500kg. For retail-ready packaging, it begins at 100 cases per SKU.',
        },
        {
          id: 'q4',
          question: 'Do you provide private labeling or white label services?',
          answer:
            "Yes, we offer comprehensive private label solutions. Our team assists with packaging design, regulatory labeling compliance, and custom blend development to suit your brand's unique identity.",
        },
      ],
    },
    {
      id: 'shipping',
      icon: 'public',
      title: 'Shipping & Exports',
      accentHex: '#3a261a',
      items: [
        {
          id: 'q5',
          question: 'Which countries do you currently export to?',
          answer:
            'HSI has a global footprint, exporting to over 30 countries across North America, Europe, the Middle East, and South East Asia. We are well-versed in the specific import regulations of these regions.',
        },
        {
          id: 'q6',
          question: 'How do you manage moisture control during sea transit?',
          answer:
            'We use high-grade multi-layer moisture barrier packaging and container liners. Desiccants are standard for long-haul sea shipments to prevent humidity-related quality degradation.',
        },
      ],
    },
    {
      id: 'certs',
      icon: 'workspace_premium',
      title: 'Certifications',
      accentHex: '#5c040a',
      items: [
        {
          id: 'q7',
          question: 'What food safety certifications does HSI hold?',
          answer:
            'Our facilities are FSSAI, ISO 22000, and HACCP certified. We also hold Organic (NPOP/NOP), Halal, and Kosher certifications for specific product ranges as required by international markets.',
        },
      ],
    },
  ];

  toggle(id: string): void {
    this.openItems.update((set) => {
      const next = new Set(set);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  isOpen(id: string): boolean {
    return this.openItems().has(id);
  }
}
