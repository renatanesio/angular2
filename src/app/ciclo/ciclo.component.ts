import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})
export class CicloComponent implements
// eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;


  constructor() {
    this.log('constructor');
  }

  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  ngOnChanges(): void {
    this.log('ngOnChanges');
  }

  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  ngOnInit(): void {
    this.log('ngOnInit');
  }

  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  ngDoCheck(): void {
    this.log('ngDoCheck');
  }

  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
  }

  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }

  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }

  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
