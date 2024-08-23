import { Component } from '@angular/core';
import { IntroductionToCssComponent } from './introduction-to-css/introduction-to-css.component';
import { HistoryofcssComponent } from './historyofcss/historyofcss.component';
import { TypesofcssComponent } from './typesofcss/typesofcss.component';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [
    IntroductionToCssComponent,
    HistoryofcssComponent,
    TypesofcssComponent
  ],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.css'
})
export class MaincontentComponent {

}
