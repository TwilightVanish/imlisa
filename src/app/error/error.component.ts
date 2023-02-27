import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    this.consoleText(['Connection Terminated', 'You\'re not in the know', 'Leave', 'Leave.', 'Leave..', 'Leave...'], 'text', ['DarkOrange', 'rebeccapurple', 'red', 'red', 'red', 'red']);
  }

  ngAfterViewInit(): void {
    document.querySelector('body').classList.add('dark');
  }

  ngOnDestroy(): void {
    document.querySelector('body').classList.remove('dark');
  }

  consoleText(words: string[], id: string, colors: string[]): void {
    if (colors === undefined) { colors = ['#fff']; }
    let visible = true;
    const con = document.getElementById('console');
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    const target = document.getElementById(id);
    target.setAttribute('style', 'color:' + colors[0]);
    window.setInterval(() => {

      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        window.setTimeout(() => {
          const usedColor = colors.shift();
          colors.push(usedColor);
          const usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', 'color:' + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(() => {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 300);
    window.setInterval(() => {
      if (visible === true) {
        con.className = 'console-underscore hidden';
        visible = false;

      } else {
        con.className = 'console-underscore';

        visible = true;
      }
    }, 400);
  }

}
