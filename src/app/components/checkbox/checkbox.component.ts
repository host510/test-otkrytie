import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit, AfterViewInit {

  @ViewChild('checkboxEl') checkboxEl: ElementRef | undefined;
  checkboxLabelValue = 'Не выбрано';

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.renderer.listen(this.checkboxEl?.nativeElement, 'click', () => {
      this.checkboxLabelValue = this.checkboxEl?.nativeElement.checked ? 'Выбрано' : 'Не выбрано';
    });
  }

}
