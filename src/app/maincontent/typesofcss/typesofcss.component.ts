import { Component } from '@angular/core';
import { ConvertcodeComponent } from '../../convertcode/convertcode.component';

@Component({
  selector: 'app-typesofcss',
  standalone: true,
  imports: [ConvertcodeComponent],
  templateUrl: './typesofcss.component.html',
  styleUrl: './typesofcss.component.css'
})
export class TypesofcssComponent {
  type1:string=`
<!DOCTYPE html>
<html>
<body>
  <p style="color: blue; font-size: 16px;">This is inline CSS.</p>
</body>
</html>'`
  
  type2:string=`
<!DOCTYPE html>
<html>
<body>
    <style>
        body {
            background-color: #f0f0f0;
        }
        h1 {
            color: red;
        }
    </style>
    <h1>Hello World</h1>
</body>
</html>`;

  type3_1 = `
<!DOCTYPE html>
<html>
<body>
  <link rel="stylesheet" href="styles.css">
  <h1>Hello World</h1>
</body>
</html>`;

  type3_2 =`
body {
  background-color: #f0f0f0;
}
h1 {
    color: red;
}`;

type4 = `:root {
  --main-bg-color: lightblue;
}
body {
  background-color: var(--main-bg-color);
}`;
}
