import { Component } from '@angular/core';
import { Square } from './square';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    this.generateSquares();
  }
  generateSquares() {
    let dict: string[] = ["Aqua", "Blue", "BlueViolet", "Brown", "CadetBlue", "Chocolate", "Coral", "CornflowerBlue", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGreen", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DodgerBlue", "FireBrick", "ForestGreen", "Fuchsia", "GoldenRod", "HotPink", "IndianRed", "Indigo", "LightBlue", "LightCoral", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGreen", "PaleVioletRed", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SeaGreen", "Sienna", "SkyBlue", "SlateBlue", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet"];
    this.squares = [];
    let blueCnt: number = 1 + Math.floor(Math.random() * 3);
    for (let i = 0; i < 6; i++) {
      this.squares.push({
        name: 'cb' + (i + 1),
        color: dict[Math.floor(Math.random() * dict.length)],
        checked: false
      });
    }
    let bluePostitions: number[] = [];
    for (let i = 0; i < blueCnt; i++) {
      let r: number;
      do {
        r = Math.floor(Math.random() * 6);
      } while (bluePostitions.includes(r));
      bluePostitions.push(r);
      this.squares[r].color = 'blue';
    }
  }
  submit() {
    if (this.squares.filter(a => a.color === 'blue').some(a => !(a.checked))) {
      alert("Not all blue squares are selected");
    }
    else {
      alert("Succsess");
      this.generateSquares();
    }
  }
  title = 'ang-proj1';
  squares: Square[] = [];
}
