import { Component, EventEmitter, OnInit, Output, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent implements OnInit, AfterViewInit {

  @Output() emitValue: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('textField') textField: ElementRef | undefined;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.renderer.listen(this.textField?.nativeElement, 'input', (event) => {
      setTimeout(() => {
        this.emitValue.emit(event.target.value);
      }, 700)
    });
  }

}
