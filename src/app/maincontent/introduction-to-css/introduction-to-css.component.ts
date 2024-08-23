import { Component } from '@angular/core';
import { ConvertcodeComponent } from '../../convertcode/convertcode.component';

@Component({
  selector: 'app-introduction-to-css',
  standalone: true,
  imports: [
    ConvertcodeComponent
  ],
  templateUrl: './introduction-to-css.component.html',
  styleUrl: './introduction-to-css.component.css'
})
export class IntroductionToCssComponent {
  code = `
  <!DOCTYPE html>
  <html>
  <body>
    <style>
        div {
            border: 1px solid black;
        }
    </style>
    <div> Style This! </div>
  </body>
  </html>
  `;
}
