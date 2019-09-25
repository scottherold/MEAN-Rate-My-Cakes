import { Component, OnInit } from '@angular/core'; // OnInit for load
import { HttpService } from './http.service'; // Access HTTP requests to API
import { Title } from '@angular/platform-browser'; // Change the title...

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // <--- Constructors --->
  constructor(private _httpService: HttpService, private titleService: Title) { }

  // <--- Variables --->
  cakes = []; // list of cakes
  cake: any; // for individual cake
  cakeClicked: boolean; // for dynamic page area

  // <--- Methods --->
  // Initial settings when componenent is loaded
  ngOnInit() {
    this.setTitle("Rate My Cakes!")
    this.getCakesFromService(); // populates cakes
    this.cakeClicked = false; // hides dynamic content
  };

  // Sets Title
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  };

  // invokes the getCakes() method from http.service
  getCakesFromService() {
    let observable = this._httpService.getCakes();

    // Processes data
    observable.subscribe(data => {
      console.log("Got the cakes!", data); // check
      this.cakes = data['cakes']; // sets cakes list
    })
  };

  // invokes the getCake() method from http.service
  getCakeFromService(id) {
    let observable = this._httpService.getCake(id);

    // Processes data
    observable.subscribe(cake => {
      console.log("Got the cake!", cake); // check
      this.cake = cake; // sets cake variable
      this.cakeClicked = true;
    })
  };

  // <-- Event-Based Methods -->
  // onclick -> getCakesFromService
  getCakes() {
    this.getCakesFromService();
  };

  // <-- Child-Specific Listeners -->
  hideCake() {
    this.cakeClicked = false;
  };

  // Checks if cake with added rating is dynamically displayed, if so query the DB for updated ratings
  verifyDisplayCake(id: string) {
    if (this.cake._id === id && this.cakeClicked) {
      this.getCakeFromService(id);
    }
  };

  // Overwrites list of cakes with cakes filtered by baker name
  filterCakes(data) {
    this.cakes = data;
  }
}
