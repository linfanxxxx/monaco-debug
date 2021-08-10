import { AfterViewInit, Component, OnInit } from '@angular/core';

import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'my-app'
  constructor(){

  }
  ngAfterViewInit(): void {
    monaco.editor.create(document.getElementById('testEditor'), {
      value: `
object: 
  test: 123
      `,
      language: 'yaml',
      theme: "vs-dark",
    });

    console.log('monaco2', monaco)
    setTimeout(()=>{
      console.log('monaco', monaco)
    },1000)
  }
  ngOnInit(): void {
  }
}
