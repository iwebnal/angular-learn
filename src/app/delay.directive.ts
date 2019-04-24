import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective implements OnInit {

  @Input() appDelay:number;

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) { }

  ngOnInit() {
    // this.view.createEmbeddedView(this.template);
  
    // setTimeout(_ => {
    //   this.view.createEmbeddedView(this.template);
    // }, 3000);

    setTimeout(_ => {
      this.view.createEmbeddedView(this.template);
    }, this.appDelay * 1000);
  
  
  }

}
