import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-convertcode',
  standalone: true,
  imports: [],
  templateUrl: './convertcode.component.html',
  styleUrl: './convertcode.component.css'
})
export class ConvertcodeComponent {
  @Input() code:string="";
  // @Input() codeoutput:string='';

  ngOnInit(){
    this.code = this.code.replaceAll(/</g,'++<');
    this.code = this.code.replaceAll(/>/g,'++>');
    this.code = this.code.replaceAll(/;/g,'++;');
    this.code = this.code.replaceAll(/\//g,'++/');
    this.code = this.code.replaceAll(' ','&nbsp;');
    
    this.code = this.code.replaceAll('++<','<span class="color-blue"><</span>');
    this.code = this.code.replaceAll('++>','<span class="color-blue">></span>');
    this.code = this.code.replaceAll('{','<span class="color-black">{</span>');
    this.code = this.code.replaceAll('}','<span class="color-black">}</span>');
    this.code = this.code.replaceAll('++/','<span class="color-blue">/</span>');
    this.code = this.code.replaceAll('border','<span class="color-red">border</span>');
    this.code = this.code.replaceAll(':','<span class="color-black">:</span><span class="color-blue">');
    this.code = this.code.replaceAll('++;','<span class="color-black">;</span></span>');
    this.code = this.code.replaceAll('!DOCTYPE&nbsp;html','<span class="color-gray">!DOCTYPE html</span>');
    this.code = this.code.replaceAll('\n','<br>');
  }
}
