import { Component, OnInit } from '@angular/core';
import {catchError, combineLatest, from, fromEvent, map, mapTo, of, scan, startWith, timer} from "rxjs";
import {ajax} from "rxjs/internal/ajax/ajax";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {



  }



}
