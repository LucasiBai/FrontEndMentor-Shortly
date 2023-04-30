import { Component } from '@angular/core';
import { IconCardDataI } from 'src/app/modules/decorations/models/icon-card-data-i';

const cardData: IconCardDataI[] = [
  {
    icon: '../../../../assets/images/icon-brand-recognition.svg',
    header: 'Brand Recognition',
    content:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },

  {
    icon: '../../../../assets/images/icon-detailed-records.svg',
    header: 'Detailed Records',
    content:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
];
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  contentArticles: IconCardDataI[] = cardData;
}
