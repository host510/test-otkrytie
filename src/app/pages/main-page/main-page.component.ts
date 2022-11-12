import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('main') main: ElementRef | undefined;
  @ViewChild('navMenu') navMenu: ElementRef | undefined;
  @ViewChild('toggleNav') toggleNav: ElementRef | undefined;

  destroy$ = new Subject<void>();
  isNavOpen$ = new BehaviorSubject<boolean>(false);
  isNavOpen: boolean | undefined;
  multiArray = Array(3);
  buttonText = 'Без поведения';
  selectItems = [
    {
      name: 'Первая опция'
    },
    {
      name: 'Вторая опция'
    },
  ];
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.isNavOpen$.pipe(takeUntil(this.destroy$)).subscribe(value => this.isNavOpen = value);
  }

  ngAfterViewInit(): void  {
    this.renderer.listen(this.toggleNav?.nativeElement, 'click', () => {
      this.isNavOpen$.next(this.isNavOpen ? false : true);
      this.renderer.setStyle(this.navMenu?.nativeElement, 'width', this.isNavOpen ? '13vw' : '0');
      this.renderer.setStyle(this.toggleNav?.nativeElement, 'left', this.isNavOpen ? 'calc(13vw + 24px)' : '24px');
      this.renderer.setStyle(this.main?.nativeElement, 'left', this.isNavOpen ? '13vw' : '24px');
      this.renderer.setStyle(this.main?.nativeElement, 'width', this.isNavOpen ? 'calc(100vw - 13vw - 24px)' : 'calc(100vw - 48px)');
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
