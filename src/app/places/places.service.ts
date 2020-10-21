import { Injectable } from '@angular/core';
import {Places} from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Places[] = [
    {
      id: 'p1',
      title: 'Scientia Residence Apartment',
      description: 'Apartment for UMN students',
      imageUrl: 'https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67790135-64f0e02cd6f9df5256184f0906b9cde1.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit',
      price: 'Rp. 500,000.00 / night',
    },
    {
      id: 'p2',
      title: 'Bona Vista Apartment',
      description: 'Apartment for everyone who lives in South Jakarta',
      imageUrl: 'https://www.bonavista.co.id/images/bonavistaapartments.jpg',
      price: 'Rp. 650,000.00 / night',
    },
    {
      id: 'p3',
      title: 'Mediterania Garden Apartment',
      description: 'Apartment for the prime living place in West Jakarta. Close to one school and three universities',
      imageUrl: 'https://jendela360.com/gallery/apartment/mediterania59377a3da9ec6_thumb.JPG',
      price: 'Rp. 1,000,000.00 / night',
    },
    {
      id: 'p4',
      title: 'Bukit Golf Pondok Indah Apartment',
      description: 'An apartment located in a strategic area in Pondok Indah, South Jakarta',
      imageUrl: 'https://habitat.id/assets/apartment/apartment-golf-pondok-indah-595b6c77de1f3.jpg',
      price: 'Rp. 1.500.000.00 / night',
    },
    {
      id: 'p5',
      title: 'Apartemen Taman Anggrek',
      description: 'An apartment located in the most strategic part of Tanjung Duren, West Jakarta',
      imageUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/239/239029460.jpg',
      price: 'Rp. 2.550.000.00 / night',
    }
  ]
  ;

  constructor() { }

  getAllPlaces(){
    return [...this.places];
  }

  getPlace(Id: string){
    return this.places.find(place => {
      return place.id === Id;
    });
  }

  deletePlace(placeId: string){
    this.places = this.places.filter(place => {
      return place.id !== placeId;
    });
  }
}
