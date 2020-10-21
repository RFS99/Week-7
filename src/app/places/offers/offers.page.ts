import { Component, OnInit } from '@angular/core';
import { Places } from '../places.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  places: Places[];
  constructor(
      private recipeService: PlacesService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.places = this.recipeService.getAllPlaces();
  }
}
