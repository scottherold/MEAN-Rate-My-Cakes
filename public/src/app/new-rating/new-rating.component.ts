import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; // Input, Output, EventEmitter added
import { HttpService } from '../http.service'; // Http requests

@Component({
  selector: 'app-new-rating',
  templateUrl: './new-rating.component.html',
  styleUrls: ['./new-rating.component.css']
})

export class NewRatingComponent implements OnInit {
  @Input() cake: any; // Import cake
  @Output() ratingAdded = new EventEmitter(); // To verify if cake is displayed through root componenent; sent to parent cakes component

  // <--- Constructors --->
  constructor(private _httpService: HttpService) { }

  // <--- Variables --->
  newRating: any; // for new rating

  // <--- Methods --->
  ngOnInit() {
    this.newRating = { comment: "", score: 5 }
  }

  // <-- Event-Based Methods -->
  // invokes the createRating() method from http.service
  addRatingFromService(id: string) {
    // invokes the addCake() method from http.service
    let observable = this._httpService.addRating(id, this.newRating);

    // Processes data
    observable.subscribe(cake => {
      console.log("New rating added!", cake); // check
      this.newRating = { comment: "", score: 5 } // resets form data
      this.ratingAdded.emit(id);
    });
  }
}
