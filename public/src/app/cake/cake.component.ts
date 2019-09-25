import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; // add Input, Output, EventEmitter
import { HttpService } from '../http.service'; // Http requests

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})

export class CakeComponent implements OnInit {
  @Input() cake: any; // cake object
  @Output() toggleCake = new EventEmitter(); // to hide cake on root component

  // <--- Constructors --->
  constructor(private _httpService: HttpService) { }

  // <--- Variables --->

  // <--- Methods --->
  ngOnInit() {

  }

  // Average rating for cake
  avgRating(ratings) {
    let sum = 0;
    let count = 0;
    
    // Average score
    ratings.forEach(rating => {
      sum += rating.score;
      count++;
    });

    return sum / count;
  };

  // <-- Event-Based Methods -->
  // Hide on click
  hideCake() {
    this.toggleCake.emit();
  }
}
