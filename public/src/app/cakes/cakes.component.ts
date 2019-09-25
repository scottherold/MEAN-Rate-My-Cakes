import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; // Add Input, Output, EventEmitter
import { HttpService } from '../http.service'; // Http requests

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})

export class CakesComponent implements OnInit {
  @Input() cakes: []; // Cakes from parent
  @Output() fetchCake = new EventEmitter(); // grabs ID for show action
  @Output() cakeUpdated = new EventEmitter(); // To verify if cake is displayed through root componenent
  
  // <--- Constructors --->
  constructor(private _httpService: HttpService) { }

  // <--- Variables --->

  // <--- Methods --->
  ngOnInit() {
    
  }

  // <-- Event-Based Methods -->
  // onclick -> send id to root component for query
  showCake(id: string) {
    this.fetchCake.emit(id); // Sends cake id to root component for query
  }

  // <-- Child-Specific Listeners -->
  // onupdate -> send id to root component to boolean if cake dynamically displayed to update
  ratingAdded(id) {
    this.cakeUpdated.emit(id);
  }
}
