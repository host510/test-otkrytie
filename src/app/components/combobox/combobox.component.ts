import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ISelectItem } from './../../../assets/data/select-items.data';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComboboxComponent implements OnInit, OnChanges {

  @Input() items: ISelectItem[] = [];
  isOptionOpen = false;
  filteredItems: ISelectItem[] = this.items;
  selectedItems: string[] = [];
  selectedItemsNames: string = 'Введите опцию для поиска';


  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.filteredItems = changes['items'].currentValue;
    }
  }

  ngOnInit(): void {
  }

  findOption(event: string): void {
    setTimeout(() => {
      this.filteredItems = event
        ? this.filteredItems.filter((item: ISelectItem) => item.name.toLocaleLowerCase().includes(event.toLocaleLowerCase()))
        : this.items;
      this.isOptionOpen = true;
      this.changeDetector.detectChanges();
    }, 500);
  }

  getOptionValue(event: any): void {
    if (!this.selectedItemsNames.includes(event)) {
      this.selectedItems.push(event);
      sessionStorage.setItem(`${event}`, 'true')
    } else {
      this.selectedItems.map((item: string) => {
        if (item === event) {
          const eventIdx = this.selectedItems.indexOf(event);
          this.selectedItems.splice(eventIdx, 1);
          sessionStorage.removeItem(`${event}`)
        }
      })
    }
    this.selectedItemsNames = this.selectedItems.join(',');
  }

}
