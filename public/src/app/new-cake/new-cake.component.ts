import { Component, OnInit, Output, EventEmitter } from '@angular/core'; // Output / EventEmitter added
import { HttpService } from '../http.service'; // Http requests

@Component({
  selector: 'app-new-cake',
  templateUrl: './new-cake.component.html',
  styleUrls: ['./new-cake.component.css']
})
export class NewCakeComponent implements OnInit {
  @Output() cakeAdded = new EventEmitter();
  
  // <--- Constructors --->
  constructor(private _httpService: HttpService) { }

  // <--- Variables --->
  newCake: any; // for create form submission

  // <--- Methods --->
  ngOnInit() {
    this.newCake = { baker_name: "", cake_url: "" }
  }

  // <-- Event-Based Methods -->
  // Create form submission
  createCake() {
    // invokes the addCake() method from http.service
    let observable = this._httpService.addCake(this.newCake);

    // Processes data
    observable.subscribe(cake => {
      console.log("New cake added!", cake); // check
      this.newCake = { baker_name: "", cake_url: "" } // resets form data
    });
    this.cakeAdded.emit(); // Tells parent that cake added to DB
  }
}
