import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChange, SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input()
  value: string = 'Text';
  // @Input()
  // first: string = "";
  // @Input()
  // seconds: string = "";

  @ViewChild("h1")
  h1ElmRef!: ElementRef;

  @ViewChild("crazy")
  crazyRef!: ElementRef;

  constructor() {
    console.log("1. Constructor");
  }

  ngAfterContentChecked(): void {
    console.log("2. AfterContentChecked");
  }

  ngAfterContentInit(): void {
    console.log("3. AfterContentInit");
  }

  ngAfterViewChecked(): void {
    console.log("4. AfterViewChecked");
  }

  ngAfterViewInit(): void {
    console.log("5. Constructor");
    console.log(this.h1ElmRef)
  }

  ngDoCheck(): void {
    console.log("6. DoCheck");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("7. OnChanges");
  }

  ngOnDestroy(): void {
    console.log("8. OnDestroy");
  }

  ngOnInit(): void {
    console.log("9. OnInit");
  }




}
