import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, Renderer2, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit, AfterViewInit {

  @Input() id: number | string | undefined;
  @Input() checkboxValue: string = '';
  @Output() emitClick: EventEmitter<string> = new EventEmitter<string>();
  @Output() emitValue: EventEmitter<any> = new EventEmitter<string>();
  @ViewChild('checkbox') checkbox: ElementRef | undefined;
  checkedValue: string | null = 'false';

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.checkedValue = sessionStorage.getItem(`${this.checkboxValue}`);
  }

  ngAfterViewInit(): void {
    this.renderer.listen(this.checkbox?.nativeElement, 'click', (event) => {
      this.emitValue.emit(event.target.value);
      this.emitClick.emit('click');
    });

  }

}
