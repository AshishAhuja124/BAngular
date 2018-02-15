import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input()
    appHighlight:number;
  

  constructor(private el:ElementRef) { }
@HostListener('click') onclick(){
  if(this.appHighlight>7)
  this.el.nativeElement.style.background='blue';
  else
  this.el.nativeElement.style.background='lightgreen';
  
}


}
