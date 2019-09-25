import { Component, OnInit, Output, EventEmitter } from '@angular/core'; // Added Output, EventEmitter
import { HttpService } from '../http.service'; // Http requests

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchedCakes = new EventEmitter(); // filtered cakes

  // <--- Constructors --->
  constructor(private _httpService: HttpService) { }

  // <--- Variables --->
  searchString: string;
  
  // <--- Methods --->
  ngOnInit() {
    this.searchString = "";
  }

  // <-- Event-based Methods -->
  // onclick -> search for bakers by name
  searchBakers() {
    let observable = this._httpService.searchCakes(this.searchString);

    observable.subscribe(data => {
      this.searchedCakes.emit(data);
      this.searchString = "";
    });
  }
}
