import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  bools = [
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    true,
  ];
  words = [
    'off',
    'on',
    'off',
    'on',
    'off',
    'on',
    'off',
    'on',
  ]

  swap(idx){
    this.bools[idx] = this.bools[idx] != true;
    if (this.bools[idx]){
      this.words[idx] = 'on';
    }
    else{
      this.words[idx] = 'off';
    }
  }

}
