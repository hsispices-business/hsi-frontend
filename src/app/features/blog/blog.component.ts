import { Component, inject } from '@angular/core';
import { GetQuoteService } from '../get-quote/get-quote-modal.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  readonly quoteService = inject(GetQuoteService);

  readonly tags = ['Sourcing', 'Quality Standards', 'Kashmir', 'Spice Science'];

  readonly relatedArticles = [
    {
      category: 'Quality Control',
      title: 'The HSI Standard: Beyond Organic Certification',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAvn3P4I_o8ZddFXSR8C_KxSPv3cXjb7mBSt519Z-Y-J9M-b8rNsHrrRX1HlNyk36xrW8NmHRkwQsvlXV5gCn4oN27MfJrIIsxgnIZR7g5weelZ_WNf-3AxK3PD2D9KPwkBO8nqhn0PRzhEDcozfWmjD4qdlxApbWnMeKSBeLmiT67NO_sKDqpJJmMWZcWX1MaFUvfF6hmInyJTcOf3vke-GxJzuoKJd8xXsyT0FaBlTkelhobBBT8hyC1R-mKqySfxRGlfAGWK-Gp9',
    },
    {
      category: 'Tradition',
      title: '26 Years of Flavor: A Journey Through Time',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD5ng49eX-lwEzG08kQC4jFoAGqwoklPfqJXLokRjI2JBy7ZRxTGyXEVuPAwDnYDw6I801DRIA6QxL0Vj_5V3VdgXOtxhN2gkWmFqzMcib5MLSAQ5jbHkL0n0-hMLgqQ0aJ2ZqXX3Yeutolqn848LjyC_CA_okULZw-4otFCjN_iEwAaHbZ213cBHYi8X4Iz3vzLy-Is8GlmJb9ill2oLIDJV84VGbc8BpcWpHjHLh_1HWSqvBvPD26JqGM8Fp6VG50SZ8LX1J0ciWr',
    },
    {
      category: 'Culinary Arts',
      title: 'Spicing for Health: Ancient Wisdom, Modern Plates',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDZWVQ6vJ_XQ_c1pZGc41J-5igu-xfk9MZdJJSCUhHDhEBoP4opuyEKSGs-aBt1m_ON-e6w1GNCU3rqHraTmOxBX5GAmhDhtzWjPeCRs1QnK-WW4-P32I6R0D5aCb0MyCLdzzabpxLoFfKZs5oOWOv5akrJsjHwzuCJDf_0vJXb2U_1AHh0btsnErKJlmaVfqcx9qumDjibfPYF4-eGYWvj1tsExET74mI1ft80JHcmtYjqeGjlO1MtKbutSuEcp5EU5bVkABF4_F02',
    },
  ];
}
